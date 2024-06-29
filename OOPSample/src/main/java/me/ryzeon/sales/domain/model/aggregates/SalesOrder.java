package me.ryzeon.sales.domain.model.aggregates;

import me.ryzeon.shared.domain.model.valueobjects.Address;

import java.util.List;
import java.util.UUID;

public class SalesOrder {

    private final UUID internalId;

    private Address shippingAddress;

    private SalesOrderStatus status;

    private final List<SalesOrderItem> items;

    private double paymentAmount;

    public SalesOrder() {
        this.internalId = UUID.randomUUID();
        this.shippingAddress = null;
        this.status = SalesOrderStatus.CREATED;
        this.items = List.of();
        this.paymentAmount = 0;
    }

    public void cancel() {
        if (status == SalesOrderStatus.CREATED) {
            status = SalesOrderStatus.CANCELLED;
        } else {
            throw new IllegalStateException("Only orders in CREATED status can be cancelled");
        }
    }

    public void dispatch(String street, String city, String zipCode, String state, String country) {
        verifyIfReadyForDispatch();
        shippingAddress = new Address(street, city, zipCode, state, country);
        status = SalesOrderStatus.IN_PROGRESS;
        items.forEach(SalesOrderItem::dispatch);
    }

    public boolean isDispatched() {
        return this.items.stream().allMatch(SalesOrderItem::isDispatched);
    }

    public void verifyIfDispatchCompleted() {
        if (status == SalesOrderStatus.IN_PROGRESS && isDispatched()) {
            status = SalesOrderStatus.SHIPPED;
        }
    }

    public boolean isInProgress() {
        return status == SalesOrderStatus.IN_PROGRESS;
    }

    public UUID getInternalId() {
        return internalId;
    }

    public void addItem(int quantity, Long productId, double unitPrice) {
        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than 0");
        }
        if (unitPrice <= 0) {
            throw new IllegalArgumentException("Unit price must be greater than 0");
        }
        if (productId == null) {
            throw new IllegalArgumentException("Product ID must be provided");
        }
        if (status == SalesOrderStatus.CREATED) {
            items.add(new SalesOrderItem(quantity, productId, unitPrice));
        } else {
            throw new IllegalStateException("Items can only be added to orders in CREATED status");
        }
    }

    public void clearItems() {
        this.items.clear();
    }

    public double calculateTotalPrice() {
        return items.stream()
                .mapToDouble(SalesOrderItem::calculateItemPrice)
                .sum();
    }

    public String getShippingAddress() {
        return shippingAddress.getAddressAsString();
    }

    public void addPayment(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Payment amount must be greater than 0");
        }
        if (amount > this.calculateTotalPrice() - paymentAmount) {
            throw new IllegalArgumentException("Payment amount exceeds the total price");
        }
        paymentAmount += amount;
    }

    public void verifyIfReadyForDispatch() {
        if (status == SalesOrderStatus.CONFIRMED) return;
        if (paymentAmount == calculateTotalPrice()) {
            status = SalesOrderStatus.CONFIRMED;
        }
    }
}
