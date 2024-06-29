package com.ryzeon.catchup.platform.news.interfaces.rest.resources;

public record FavoriteSourceResource(
        Long id,
        String newApiKey,
        String sourceId
) {
}
