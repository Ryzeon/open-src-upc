package com.ryzeon.catchup.platform.news.application.internal.commandservices;

import com.ryzeon.catchup.platform.news.infrastructure.persistence.jpa.FavoriteSourceRepository;
import com.ryzeon.catchup.platform.news.domain.model.aggregates.FavoriteSource;
import com.ryzeon.catchup.platform.news.domain.model.commands.CreateFavoriteSourceCommand;
import com.ryzeon.catchup.platform.news.domain.services.FavoriteSourceCommandService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FavoriteSourceCommandServiceImpl implements FavoriteSourceCommandService {

    private final FavoriteSourceRepository favoriteSourceRepository;

    public FavoriteSourceCommandServiceImpl(FavoriteSourceRepository favoriteSourceRepository) {
        this.favoriteSourceRepository = favoriteSourceRepository;
    }

    @Override
    public Optional<FavoriteSource> handle(CreateFavoriteSourceCommand command) {
        if (favoriteSourceRepository.existsByNewsApiKeyAndSourceId(command.newApiKey(), command.sourceId())) {
            throw new IllegalArgumentException("Favorite source with this news api key and source id already exists");
        }
        var favoriteSource = new FavoriteSource(command);
        var createdFavoriteSource = favoriteSourceRepository.save(favoriteSource);
        return Optional.of(createdFavoriteSource);
    }
}
