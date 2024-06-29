package com.ryzeon.catchup.platform.news.interfaces.rest.resources;

public record CreateFavoriteSourceResource(
        String newsApiKey,
        String sourceId
) {
    public CreateFavoriteSourceResource {
        if (newsApiKey == null || newsApiKey.isBlank()) {
            throw new IllegalArgumentException("News api key must not be null or blank");
        }
    }
}
