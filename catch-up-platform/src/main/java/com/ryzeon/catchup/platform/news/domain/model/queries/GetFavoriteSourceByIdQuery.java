package com.ryzeon.catchup.platform.news.domain.model.queries;

public record GetFavoriteSourceByIdQuery(
        Long id
) {
    public GetFavoriteSourceByIdQuery {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Id is required");
        }
    }
}
