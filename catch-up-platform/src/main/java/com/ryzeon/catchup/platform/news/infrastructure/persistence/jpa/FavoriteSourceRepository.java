package com.ryzeon.catchup.platform.news.infrastructure.persistence.jpa;

import com.ryzeon.catchup.platform.news.domain.model.aggregates.FavoriteSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteSourceRepository extends JpaRepository<FavoriteSource, Long> {

    List<FavoriteSource> findAllByNewsApiKey(String newsApiKey);

    boolean existsByNewsApiKeyAndSourceId(String newApiKey, String sourceId);

    Optional<FavoriteSource> findByNewsApiKeyAndSourceId(String newApiKey, String sourceId);
}
