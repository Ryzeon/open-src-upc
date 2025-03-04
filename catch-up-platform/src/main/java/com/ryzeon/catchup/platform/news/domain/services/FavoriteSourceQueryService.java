package com.ryzeon.catchup.platform.news.domain.services;

import com.ryzeon.catchup.platform.news.domain.model.aggregates.FavoriteSource;
import com.ryzeon.catchup.platform.news.domain.model.queries.GetAllFavoriteSourcesByNewsApiKeyQuery;
import com.ryzeon.catchup.platform.news.domain.model.queries.GetFavoriteSourceByIdQuery;
import com.ryzeon.catchup.platform.news.domain.model.queries.GetFavoriteSourceByNewsApiKeyAndSourceIdQuery;

import java.util.List;
import java.util.Optional;

public interface FavoriteSourceQueryService {

    List<FavoriteSource> handle(GetAllFavoriteSourcesByNewsApiKeyQuery query);

    Optional<FavoriteSource>  handle(GetFavoriteSourceByNewsApiKeyAndSourceIdQuery query);

    Optional<FavoriteSource> handle(GetFavoriteSourceByIdQuery query);
}
