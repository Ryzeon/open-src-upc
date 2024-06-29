package com.ryzeon.catchup.platform.news.domain.services;

import com.ryzeon.catchup.platform.news.domain.model.aggregates.FavoriteSource;
import com.ryzeon.catchup.platform.news.domain.model.commands.CreateFavoriteSourceCommand;

import java.util.Optional;

public interface FavoriteSourceCommandService {

    Optional<FavoriteSource> handle(CreateFavoriteSourceCommand command);
}
