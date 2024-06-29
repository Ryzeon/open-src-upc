package com.ryzeon.catchup.platform.news.interfaces.rest.transform;

import com.ryzeon.catchup.platform.news.domain.model.commands.CreateFavoriteSourceCommand;
import com.ryzeon.catchup.platform.news.interfaces.rest.resources.CreateFavoriteSourceResource;

public class CreateFavoriteCommandFromResourceAssembler {

    public static CreateFavoriteSourceCommand toCommandFromResource(CreateFavoriteSourceResource resource) {
        return new CreateFavoriteSourceCommand(
                resource.newsApiKey(),
                resource.sourceId()
        );
    }
}
