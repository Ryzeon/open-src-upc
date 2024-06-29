package com.ryzeon.catchup.platform.news.application.internal.queryservices;

import com.ryzeon.catchup.platform.news.domain.model.queries.GetFavoriteSourceByIdQuery;
import com.ryzeon.catchup.platform.news.domain.model.queries.GetFavoriteSourceByNewsApiKeyAndSourceIdQuery;
import com.ryzeon.catchup.platform.news.infrastructure.persistence.jpa.FavoriteSourceRepository;
import com.ryzeon.catchup.platform.news.domain.model.aggregates.FavoriteSource;
import com.ryzeon.catchup.platform.news.domain.model.queries.GetAllFavoriteSourcesByNewsApiKeyQuery;
import com.ryzeon.catchup.platform.news.domain.services.FavoriteSourceQueryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoriteSourceQueryServiceImpl implements FavoriteSourceQueryService {

    private final FavoriteSourceRepository favoriteSourceRepository;

    public FavoriteSourceQueryServiceImpl(FavoriteSourceRepository favoriteSourceRepository) {
        this.favoriteSourceRepository = favoriteSourceRepository;
    }

    @Override
    public List<FavoriteSource> handle(GetAllFavoriteSourcesByNewsApiKeyQuery query) {
        return favoriteSourceRepository.findAllByNewsApiKey(query.newsApiKey());
    }

    @Override
    public Optional<FavoriteSource> handle(GetFavoriteSourceByNewsApiKeyAndSourceIdQuery query) {
        return favoriteSourceRepository.findByNewsApiKeyAndSourceId(query.newsApiKey(), query.sourceId());
    }

    @Override
    public Optional<FavoriteSource> handle(GetFavoriteSourceByIdQuery query) {
        return favoriteSourceRepository.findById(query.id());
    }
}
