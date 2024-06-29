package com.ryzeon.catchup.platform.news.domain.model.queries;

public record GetAllFavoriteSourcesByNewsApiKeyQuery(
        String newsApiKey
) {
    public GetAllFavoriteSourcesByNewsApiKeyQuery {
        if (newsApiKey == null || newsApiKey.isBlank()) {
            throw new IllegalArgumentException("News api key must not be null or blank");
        }
    }
}
