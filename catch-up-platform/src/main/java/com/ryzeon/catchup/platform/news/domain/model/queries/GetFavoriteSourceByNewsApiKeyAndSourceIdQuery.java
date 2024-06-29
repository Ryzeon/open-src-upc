package com.ryzeon.catchup.platform.news.domain.model.queries;

public record GetFavoriteSourceByNewsApiKeyAndSourceIdQuery(
        String newsApiKey,
        String sourceId
) {
    public GetFavoriteSourceByNewsApiKeyAndSourceIdQuery {
        if (newsApiKey == null || newsApiKey.isBlank()) {
            throw new IllegalArgumentException("News api key must not be null or blank");
        }
        if (sourceId == null || sourceId.isBlank()) {
            throw new IllegalArgumentException("Source id must not be null or blank");
        }
    }
}
