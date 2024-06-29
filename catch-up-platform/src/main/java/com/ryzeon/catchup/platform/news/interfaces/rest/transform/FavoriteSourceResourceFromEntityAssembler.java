package com.ryzeon.catchup.platform.news.interfaces.rest.transform;

import com.ryzeon.catchup.platform.news.domain.model.aggregates.FavoriteSource;
import com.ryzeon.catchup.platform.news.interfaces.rest.resources.FavoriteSourceResource;

public class FavoriteSourceResourceFromEntityAssembler {

    public static FavoriteSourceResource toResourceFromEntity(FavoriteSource entity) {
        return new FavoriteSourceResource(
                entity.getId(),
                entity.getNewsApiKey(),
                entity.getSourceId()
        );
    }
}
