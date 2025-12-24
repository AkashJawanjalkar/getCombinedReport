namespace billing;

service apiservice {

    action getCombinedReport(CompanyCode: array of String, // single, mandatory
                             Plant: array of String, // single, mandatory
                             BillingDocType: array of String, // multiple, optional
                             BillingDocNo: array of String, // multiple, optional
                             BillingDateFrom: Date, // date range start, mandatory
                             BillingDateTo: Date, // date range end, mandatory
                             BusinessPlace: array of String, // multiple, optional
                             Customer: array of String, // multiple, optional
                             DeliveryDocType: array of String, // multiple, optional
                             DeliveryNo: array of String, // multiple, optional
                             DeliveryDateFrom: Date, // date range start, optional
                             DeliveryDateTo: Date // date range end, optional
    ) returns array of APIPayload;

}




type APIPayload {

    additional_supporting_document_url                       : String;
    additional_supporting_document                           : String;
    additional_information                                   : String;

    batch_name                                               : String;
    batch_warranty_date                                      : String;
    batch_expiry_date                                        : String;

    buyer_gstin                                              : String;
    buyer_legal_name                                         : String;
    buyer_trade_name                                         : String;
    buyer_place_of_supply                                    : String;
    buyer_address1                                           : String;
    buyer_address2                                           : String;
    buyer_location                                           : String;
    buyer_pincode                                            : String;
    buyer_state_code                                         : String;
    buyer_phone_number                                       : String;
    buyer_email                                              : String;

    cancel_einvoice_irn                                      : String;
    cancel_einvoice_cancel_reason                            : String;
    cancel_einvoice_cancel_remarks                           : String;
    cancel_einvoice_ewaybill_cancel                          : String;
    cancel_eway_bill_eway_bill_number                        : String;
    cancel_eway_bill_reason_of_cancel                        : String;
    cancel_eway_bill_cancel_remark                           : String;
    cancel_eway_bill_data_source                             : String;

    contact_details_project_reference_number                 : String;
    contact_details_receipt_advice_number                    : String;
    contact_details_receipt_advice_date                      : String;
    contact_details_batch_reference_number                   : String;
    contact_details_contract_reference_number                : String;
    contact_details_other_reference                          : String;
    contact_details_vendor_po_reference_number               : String;
    contact_details_vendor_po_reference_date                 : String;

    dispatch_company_name                                    : String;
    dispatch_address1                                        : String;
    dispatch_address2                                        : String;
    dispatch_location                                        : String;
    dispatch_pincode                                         : String;
    dispatch_state_code                                      : String;

    document_companycode                                     : String;
    document_type                                            : String;
    document_number                                          : String;
    document_date                                            : String;
    document_AccountingDocument                              : String;
    document_FiscalYear                                      : String;
    document_BillingDocumentIsCancelled                      : String;
    document_CancelledBillingDocument                        : String;

    einvoice_success_code                                    : String;
    einvoice_nic_code                                        : String;
    ewaybill_Status                                          : String;
    ewaybill_code                                            : String;

    ewaybill_details_transporter_id                          : String;
    ewaybill_details_transporter_name                        : String;
    ewaybill_details_transportation_mode                     : String;
    ewaybill_details_transportation_distance                 : String;
    ewaybill_details_transporter_document_number             : String;
    ewaybill_details_transporter_document_date               : String;
    ewaybill_details_vehicle_number                          : String;
    ewaybill_details_vehicle_type                            : String;
    ewaybill_details_sub_supply_type                         : String;
    ewaybill_details_gstin_of_consignor                      : String;
    ewaybill_details_legal_name_of_consignor                 : String;
    ewaybill_details_address1_of_consignor                   : String;
    ewaybill_details_address2_of_consignor                   : String;
    ewaybill_details_pincode_of_consignor                    : String;
    ewaybill_details_gstin_of_consignee                      : String;
    ewaybill_details_legal_name_of_consignee                 : String;
    ewaybill_details_address1_of_consignee                   : String;
    ewaybill_details_address2_of_consignee                   : String;
    ewaybill_details_place_of_consignee                      : String;
    ewaybill_details_pincode_of_consignee                    : String;
    ewaybill_details_state_of_supply                         : String;
    ewaybill_details_product_name                            : String;
    ewaybill_details_unit_of_product                         : String;
    ewaybill_details_cgst_rate                               : Decimal(5, 2);
    ewaybill_details_sgst_rate                               : Decimal(5, 2);
    ewaybill_details_igst_rate                               : Decimal(5, 2);
    ewaybill_details_cess_rate                               : Decimal(5, 2);
    ewaybill_details_ewayBillNo                              : String;
    ewaybill_details_ewayBillDate                            : String;
    ewaybill_details_mode_of_transport                       : String;
    ewaybill_details_group_number                            : String;
    ewaybill_details_remaining_distance                      : Decimal(15, 2);
    ewaybill_details_place_of_consignor                      : String;
    ewaybill_details_reason_code_for_vehicle_updation        : String;
    ewaybill_details_reason_for_vehicle_updation             : String;
    ewaybill_details_state_of_consignor                      : String;
    ewaybill_details_old_vehicle_number                      : String;
    ewaybill_details_new_vehicle_number                      : String;
    ewaybill_details_old_transporter_document_number         : String;
    ewaybill_details_new_transporter_document_number         : String;
    ewaybill_details_taxable_amount                          : Decimal(15, 2);
    /*
        ewaybill_details_total_assessable_value                  : Decimal(15, 2);
        ewaybill_details_total_invoice_value                     : Decimal(15, 2);
        ewaybill_details_total_cgst_value                        : Decimal(15, 2);
        ewaybill_details_total_sgst_value                        : Decimal(15, 2);
        ewaybill_details_total_igst_value                        : Decimal(15, 2);
        ewaybill_details_total_cess_value                        : Decimal(15, 2);
        ewaybill_details_round_off_amount                        : Decimal(15, 2);
        ewaybill_details_total_discount                          : Decimal(15, 2);
        ewaybill_details_total_other_charge                      : Decimal(15, 2);
        ewaybill_details_total_cess_value_of_state               : Decimal(15, 2);
        ewaybill_details_total_invoice_value_additional_currency : Decimal(15, 2);
    */
    export_details_ship_bill_number                          : String;
    export_details_ship_bill_date                            : String;
    export_details_port_code                                 : String;
    export_details_refund_claim                              : String;
    export_details_foreign_currency                          : String;
    export_details_country_code                              : String;
    export_details_export_duty                               : Decimal(15, 2);

    get_invoice_details_AckNo                                : String;
    get_invoice_details_AckDt                                : String;

    get_eway_bill_details_status                             : String;
    get_eway_bill_details_ewbno                              : String;
    get_eway_bill_details_ewbdt                              : String;
    get_eway_bill_details_ewbvalidtill                       : String;
    get_eway_bill_details_errorMessage                       : String;
    get_eway_bill_details_failed_status                      : String;
    get_eway_bill_details_code                               : String;


    item_list_item_serial_number                             : String;
    item_list_product_code                                   : String;
    item_list_product_description                            : String;
    item_list_is_service                                     : String;
    item_list_hsn_code                                       : String;
    item_list_bar_code                                       : String;
    item_list_quantity                                       : Decimal(15, 3);
    item_list_free_quantity                                  : Decimal(15, 3);
    item_list_unit                                           : String;
    item_list_unit_price                                     : Decimal(15, 2);
    item_list_total_amount                                   : Decimal(15, 2);
    item_list_discount                                       : Decimal(15, 2);
    item_list_pre_tax_value                                  : Decimal(15, 2);
    item_list_other_charge                                   : Decimal(15, 2);
    item_list_assessable_value                               : Decimal(15, 2);
    item_list_gst_rate                                       : Decimal(15, 2);
    item_list_igst_amount                                    : Decimal(15, 2);
    item_list_cgst_amount                                    : Decimal(15, 2);
    item_list_sgst_amount                                    : Decimal(15, 2);
    item_list_cess_nonadvol_amount                           : Decimal(15, 2);
    item_list_cess_cess_amount                               : Decimal(15, 2);
    item_list_cess_state_cess_amount                         : Decimal(15, 2);
    item_list_cess_state_cess_nonadvol_amount                : Decimal(15, 2);
    item_list_order_line_reference                           : String;
    item_list_country_origin                                 : String;
    item_list_product_serial_number                          : String;
    item_list_attribute_details                              : String;
    item_list_attribute_value                                : String;
    item_list_total_item_value                               : String;

    payment_details_bank_account_number                      : String;
    payment_details_paid_balance_amount                      : Decimal(15, 2);
    payment_details_credit_days                              : Decimal(5, 2);
    payment_details_direct_debit                             : String;
    payment_details_credit_transfer                          : String;
    payment_details_branch                                   : String;
    payment_details_payment_mode                             : String;
    payment_details_payee_name                               : String;
    payment_details_payment_instruction                      : String;
    payment_details_outstanding_amount                       : Decimal(15, 2);
    payment_details_payment_term                             : String;

    preceding_document_details_reference_of_original_invoice : String;
    preceding_document_details_preceding_invoice_date        : String;
    preceding_document_details_other_reference               : String;

    reference_details_other_reference                        : String;
    reference_details_invoice_period_start_date              : String;
    reference_details_invoice_period_end_date                : String;
    reference_details_invoice_reference_number               : String;
    reference_details_invoice_remarks                        : String;

    seller_details_gstin                                     : String;
    seller_details_legal_name                                : String;
    seller_details_trade_name                                : String;
    seller_details_address1                                  : String;
    seller_details_address2                                  : String;
    seller_details_location                                  : String;
    seller_details_pincode                                   : String;
    seller_details_state_code                                : String;
    seller_details_phone_number                              : String;
    seller_details_email                                     : String;

    ship_details_gstin                                       : String;
    ship_details_legal_name                                  : String;
    ship_details_trade_name                                  : String;
    ship_details_address1                                    : String;
    ship_details_address2                                    : String;
    ship_details_location                                    : String;
    ship_details_pincode                                     : String;
    ship_details_state_code                                  : String;

    transaction_details_user_gstin                           : String;
    transaction_details_supply_type                          : String;
    transaction_details_charge_type                          : String;
    transaction_details_ecommerce_gstin                      : String;
    transaction_details_BillingDocumentType                  : String;
    transaction_details_igst_on_intra                        : String;

    value_details_total_assessable_value                     : Decimal(15, 2);
    value_details_total_cgst_value                           : Decimal(15, 2);
    value_details_total_sgst_value                           : Decimal(15, 2);
    value_details_total_igst_value                           : Decimal(15, 2);
    value_details_total_cess_value                           : Decimal(15, 2);
    value_details_total_cess_value_of_state                  : Decimal(15, 2);
    value_details_round_off_amount                           : Decimal(15, 2);
    value_details_total_invoice_value                        : Decimal(15, 2);
    value_details_total_discount                             : Decimal(15, 2);
    value_details_total_other_charge                         : Decimal(15, 2);
    value_details_total_invoice_value_additional_currency    : Decimal(15, 2);

}
