package com.ryzeon.catchup.platform.news.interfaces.rest;

import com.ryzeon.catchup.platform.news.domain.model.aggregates.FavoriteSource;
import com.ryzeon.catchup.platform.news.domain.model.queries.GetAllFavoriteSourcesByNewsApiKeyQuery;
import com.ryzeon.catchup.platform.news.domain.model.queries.GetFavoriteSourceByIdQuery;
import com.ryzeon.catchup.platform.news.domain.model.queries.GetFavoriteSourceByNewsApiKeyAndSourceIdQuery;
import com.ryzeon.catchup.platform.news.domain.services.FavoriteSourceCommandService;
import com.ryzeon.catchup.platform.news.domain.services.FavoriteSourceQueryService;
import com.ryzeon.catchup.platform.news.interfaces.rest.resources.CreateFavoriteSourceResource;
import com.ryzeon.catchup.platform.news.interfaces.rest.resources.FavoriteSourceResource;
import com.ryzeon.catchup.platform.news.interfaces.rest.transform.CreateFavoriteCommandFromResourceAssembler;
import com.ryzeon.catchup.platform.news.interfaces.rest.transform.FavoriteSourceResourceFromEntityAssembler;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/api/v1/favorite-sources")
// bajo ddd, es inbount services
// del exterior tengo interacion bajo recursos
// entonces debo convertir los recursos a comandos
// asi la capa de aplicacion puede interactuar con los comandos
// con los handle
public class FavoriteSourcesController {

    private final FavoriteSourceCommandService favoriteSourceCommandService;
    private final FavoriteSourceQueryService favoriteSourceQueryService;

    public FavoriteSourcesController(FavoriteSourceCommandService favoriteSourceCommandService, FavoriteSourceQueryService favoriteSourceQueryService) {
        this.favoriteSourceCommandService = favoriteSourceCommandService;
        this.favoriteSourceQueryService = favoriteSourceQueryService;
    }

    @PostMapping
    public ResponseEntity<FavoriteSourceResource> createFavoriteSource(@RequestBody CreateFavoriteSourceResource createFavoriteSourceResource) {
        Optional<FavoriteSource> favoriteSource = favoriteSourceCommandService
                .handle(
                        // Here  we convert the CreateFavoriteSourceResource to CreateFavoriteSourceCommand
                        // using the CreateFavoriteCommandFromResourceAssembler
                        CreateFavoriteCommandFromResourceAssembler.toCommandFromResource(createFavoriteSourceResource));
        return favoriteSource
                .map(value -> {
                    // Now we convert the FavoriteSource to FavoriteSourceResource
                    // using the FavoriteSourceResourceFromEntityAssembler
                    FavoriteSourceResource favoriteSourceResource = FavoriteSourceResourceFromEntityAssembler.toResourceFromEntity(value);
                    return new ResponseEntity<>(favoriteSourceResource, CREATED);
                })
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("{id}")
    public ResponseEntity<FavoriteSourceResource> getFavoriteSourceById(@PathVariable Long id) {
        Optional<FavoriteSource> favoriteSource = favoriteSourceQueryService.handle(
                new GetFavoriteSourceByIdQuery(id)
        );
        return favoriteSource
                .map(value -> {
                    FavoriteSourceResource favoriteSourceResource = FavoriteSourceResourceFromEntityAssembler.toResourceFromEntity(value);
                    return ResponseEntity.ok(favoriteSourceResource);
                })
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    private ResponseEntity<List<FavoriteSourceResource>> getAllFavoriteSourcesByNewsApiKey(String newsApiKey) {
        var getAllFavoriteSourceByNewsApiKeyQuery = new GetAllFavoriteSourcesByNewsApiKeyQuery(newsApiKey);
        var favoriteSources = favoriteSourceQueryService.handle(
                getAllFavoriteSourceByNewsApiKeyQuery
        );
        if (favoriteSources.isEmpty()) return ResponseEntity.notFound().build();
        var favoriteSourceResources = favoriteSources.stream()
                .map(FavoriteSourceResourceFromEntityAssembler::toResourceFromEntity)
                .toList();
        return ResponseEntity.ok(favoriteSourceResources);
    }

    private ResponseEntity<FavoriteSourceResource> getFavoriteSourceByNewsApiKeyAndSourceId(String newsApiKey, String sourceId) {
        var getFavoriteSourceByNewsApiKeyAndSourceIdQuery = new GetFavoriteSourceByNewsApiKeyAndSourceIdQuery(newsApiKey, sourceId);
        var favoriteSource = favoriteSourceQueryService.handle(
                getFavoriteSourceByNewsApiKeyAndSourceIdQuery
        );
        if (favoriteSource.isEmpty()) return ResponseEntity.notFound().build();
        return favoriteSource
                .map(FavoriteSourceResourceFromEntityAssembler::toResourceFromEntity)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<?> getFavoritesSourcesWithParameters(@RequestParam Map<String, String> params) {
        if (params.containsKey("newsApiKey") && params.containsKey("sourceId")) {
            return getFavoriteSourceByNewsApiKeyAndSourceId(params.get("newsApiKey"), params.get("sourceId"));
        } else if (params.containsKey("newsApiKey")) {
            return getAllFavoriteSourcesByNewsApiKey(params.get("newsApiKey"));
        }
        return ResponseEntity.notFound().build();
    }
}