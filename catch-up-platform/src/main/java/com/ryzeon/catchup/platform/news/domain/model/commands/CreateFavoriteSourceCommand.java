package com.ryzeon.catchup.platform.news.domain.model.commands;

public record CreateFavoriteSourceCommand(
        String newApiKey,
        String sourceId
) {
    public CreateFavoriteSourceCommand {
        if (newApiKey == null || newApiKey.isBlank()) {
            throw new IllegalArgumentException("newApiKey is required");
        }
        if (sourceId == null || sourceId.isBlank()) {
            throw new IllegalArgumentException("sourceId is required");
        }
    }
}
