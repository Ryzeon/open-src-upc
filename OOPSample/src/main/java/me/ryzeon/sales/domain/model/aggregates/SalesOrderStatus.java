package me.ryzeon.sales.domain.model.aggregates;

public enum SalesOrderStatus {
    CREATED,
    CONFIRMED,
    SHIPPED,
    IN_PROGRESS,
    DELIVERED,
    CANCELLED
}
