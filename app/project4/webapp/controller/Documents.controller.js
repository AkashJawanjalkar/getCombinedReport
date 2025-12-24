sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/VBox",
    "sap/m/CheckBox",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/comp/filterbar/FilterBar",
    "sap/ui/comp/filterbar/FilterItem",
    "sap/m/Input",
    "sap/ui/core/BusyIndicator"
], function (Controller, JSONModel, Dialog, Button, VBox, CheckBox, List, StandardListItem, Filter, FilterOperator, FilterBar, FilterItem, Input, BusyIndicator) {
    "use strict";

    return Controller.extend("project4.controller.Documents", {


        _filterConfig: [
            {
                name: "document_companycode",
                label: "Company Code",
                visible: true
            },
            {
                name: "transaction_details_BillingDocumentType",
                label: "Document Type",
                visible: true
            },
            {
                name: "document_number",
                label: "Document Number",
                visible: true
            },
            {
                name: "document_date",
                label: "Document Date",
                type: "DatePicker",
                groupName: "Dates",
                visible: true
            },
            {
                name: "document_AccountingDocument",
                label: "Accounting Document",
                visible: true
            }
            ,
            {
                name: "document_FiscalYear",
                label: "Fiscal Year",
                visible: true
            },
            {
                name: "document_BillingDocumentIsCancelled",
                label: "Billing Cancelled?",
                visible: false
            },
            {
                name: "document_CancelledBillingDocument",
                label: "Cancelled Billing Doc",
                visible: false
            },
            {
                name: "buyer_legal_name",
                label: "Buyer Legal Name",
                visible: false
            },
            {
                name: "buyer_trade_name",
                label: "Buyer Trade Name",
                visible: false
            },
            {
                name: "additional_supporting_document_url",
                label: "Supporting Doc URL",
                visible: false
            },
            {
                name: "additional_supporting_document",
                label: "Supporting Document",
                visible: false
            },
            {
                name: "additional_information",
                label: "Additional Info",
                visible: false
            },
            {
                name: "batch_name",
                label: "Batch Name",
                visible: false
            },
            {
                name: "batch_warranty_date",
                label: "Batch Warranty Date",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false
            },
            {
                name: "batch_expiry_date",
                label: "Batch Expiry Date",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false
            },
            {
                name: "buyer_gstin",
                label: "Buyer GSTIN",
                visible: false
            },
            {
                name: "buyer_place_of_supply",
                label: "Place of Supply",
                visible: false
            },
            {
                name: "buyer_address1",
                label: "Buyer Address 1",
                visible: false
            },
            {
                name: "buyer_address2",
                label: "Buyer Address 2",
                visible: false
            },
            {
                name: "buyer_location",
                label: "Buyer Location",
                visible: false
            },
            {
                name: "buyer_pincode",
                label: "Buyer Pincode",
                visible: false
            },
            {
                name: "buyer_state_code",
                label: "Buyer State Code",
                visible: false
            },
            {
                name: "buyer_phone_number",
                label: "Buyer Phone Number",
                visible: false
            },
            {
                name: "buyer_email",
                label: "Buyer Email",
                visible: false
            },
            {
                name: "cancel_einvoice_irn",
                label: "Cancel E-Invoice IRN",
                visible: false
            },
            {
                name: "cancel_einvoice_cancel_reason",
                label: "Cancel Reason",
                visible: false
            },
            {
                name: "cancel_einvoice_cancel_remarks",
                label: "Cancel Remarks",
                visible: false
            },
            {
                name: "cancel_einvoice_ewaybill_cancel",
                label: "E-Invoice Cancel Flag",
                visible: false
            },
            {
                name: "cancel_eway_bill_eway_bill_number",
                label: "E-Way Bill No (Cancelled)",
                visible: false
            },
            {
                name: "cancel_eway_bill_reason_of_cancel",
                label: "E-Way Cancel Reason",
                visible: false
            },
            {
                name: "cancel_eway_bill_cancel_remark",
                label: "E-Way Cancel Remark",
                visible: false
            },
            {
                name: "cancel_eway_bill_data_source",
                label: "Cancel Data Source",
                visible: false
            },
            {
                name: "contact_details_project_reference_number",
                label: "Project Reference No",
                visible: false
            },
            {
                name: "contact_details_receipt_advice_number",
                label: "Receipt Advice No",
                visible: false
            },
            {
                name: "contact_details_receipt_advice_date",
                label: "Receipt Advice Date",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false
            },
            {
                name: "contact_details_batch_reference_number",
                label: "Batch Reference No",
                visible: false
            },
            {
                name: "contact_details_contract_reference_number",
                label: "Contract Reference No",
                visible: false
            },
            {
                name: "contact_details_other_reference",
                label: "Other Reference",
                visible: false
            },
            {
                name: "contact_details_vendor_po_reference_number",
                label: "Vendor PO Reference No",
                visible: false
            },
            {
                name: "contact_details_vendor_po_reference_date",
                label: "Vendor PO Date",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false
            },
            {
                name: "dispatch_company_name",
                label: "Dispatch Company Name",
                visible: false
            },
            {
                name: "dispatch_address1",
                label: "Dispatch Address Line 1",
                visible: false
            },
            {
                name: "dispatch_address2",
                label: "Dispatch Address Line 2",
                visible: false
            },
            {
                name: "dispatch_location",
                label: "Dispatch Location",
                visible: false
            },
            {
                name: "dispatch_pincode",
                label: "Dispatch Pincode",
                visible: false
            },
            {
                name: "dispatch_state_code",
                label: "Dispatch State Code",
                visible: false
            },
            {
                name: "einvoice_success_code",
                label: "E-Invoice Success Code",
                visible: false
            },
            {
                name: "einvoice_nic_code",
                label: "E-Invoice NIC Code",
                visible: false
            },
            {
                name: "ewaybill_Status",
                label: "E-Way Status",
                visible: false
            },
            {
                name: "ewaybill_code",
                label: "E-Way Code",
                visible: false
            },
            {
                name: "ewaybill_details_transporter_id",
                label: "Transporter ID",
                visible: false
            },
            {
                name: "ewaybill_details_transporter_name",
                label: "Transporter Name",
                visible: false
            },
            {
                name: "ewaybill_details_transportation_mode",
                label: "Transport Mode",
                visible: false
            },
            {
                name: "ewaybill_details_transportation_distance",
                label: "Transport Distance",
                visible: false
            },
            {
                name: "ewaybill_details_transporter_document_number",
                label: "Transport Doc No",
                visible: false
            },
            {
                name: "ewaybill_details_transporter_document_date",
                label: "Transport Doc Date",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false
            },
            {
                name: "ewaybill_details_vehicle_number",
                label: "Vehicle Number",
                visible: false
            },
            {
                name: "ewaybill_details_vehicle_type",
                label: "Vehicle Type",
                visible: false
            },
            {
                name: "ewaybill_details_sub_supply_type",
                label: "Sub Supply Type",
                visible: false
            },
            {
                name: "ewaybill_details_gstin_of_consignor",
                label: "Consignor GSTIN",
                visible: false
            },
            {
                name: "ewaybill_details_legal_name_of_consignor",
                label: "Consignor Legal Name",
                visible: false
            },
            {
                name: "ewaybill_details_address1_of_consignor",
                label: "Consignor Address 1",
                visible: false
            },
            {
                name: "ewaybill_details_address2_of_consignor",
                label: "Consignor Address 2",
                visible: false
            },
            {
                name: "ewaybill_details_pincode_of_consignor",
                label: "Consignor Pincode",
                visible: false
            },
            {
                name: "ewaybill_details_gstin_of_consignee",
                label: "Consignee GSTIN",
                visible: false
            },
            {
                name: "ewaybill_details_legal_name_of_consignee",
                label: "Consignee Legal Name",
                visible: false
            },
            {
                name: "ewaybill_details_address1_of_consignee",
                label: "Consignee Address 1",
                visible: false
            },
            {
                name: "ewaybill_details_address2_of_consignee",
                label: "Consignee Address 2",
                visible: false
            },
            {
                name: "ewaybill_details_place_of_consignee",
                label: "Consignee Place",
                visible: false
            },
            {
                name: "ewaybill_details_pincode_of_consignee",
                label: "Consignee Pincode",
                visible: false
            },
            {
                name: "ewaybill_details_state_of_supply",
                label: "State of Supply",
                visible: false
            },
            {
                name: "ewaybill_details_product_name",
                label: "Product Name",
                visible: false
            },
            {
                name: "ewaybill_details_unit_of_product",
                label: "Unit of Product",
                visible: false
            },
            {
                name: "ewaybill_details_cgst_rate",
                label: "CGST Rate",
                visible: false
            },
            {
                name: "ewaybill_details_sgst_rate",
                label: "SGST Rate",
                visible: false
            },
            {
                name: "ewaybill_details_igst_rate",
                label: "IGST Rate",
                visible: false
            },
            {
                name: "ewaybill_details_cess_rate",
                label: "CESS Rate",
                visible: false
            },
            {
                name: "ewaybill_details_ewayBillNo",
                label: "E-Way Bill No",
                visible: false
            },
            {
                name: "ewaybill_details_ewayBillDate",
                label: "E-Way Bill Date",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false
            }
            ,
            {
                name: "ewaybill_details_mode_of_transport",
                label: "Mode of Transport",
                visible: false
            },
            {
                name: "ewaybill_details_group_number",
                label: "Group Number",
                visible: false
            },
            {
                name: "ewaybill_details_remaining_distance",
                label: "Remaining Distance",
                visible: false
            },
            {
                name: "ewaybill_details_place_of_consignor",
                label: "Place of Consignor",
                visible: false
            },
            {
                name: "ewaybill_details_reason_code_for_vehicle_updation",
                label: "Reason Code for Vehicle Updation",
                visible: false
            },
            {
                name: "ewaybill_details_reason_for_vehicle_updation",
                label: "Reason for Vehicle Updation",
                visible: false
            },
            {
                name: "ewaybill_details_state_of_consignor",
                label: "State of Consignor",
                visible: false
            }
            ,
            {
                name: "ewaybill_details_old_vehicle_number",
                label: "Old Vehicle Number",
                visible: false
            },
            {
                name: "ewaybill_details_new_vehicle_number",
                label: "New Vehicle Number",
                visible: false
            },
            {
                name: "ewaybill_details_old_transporter_document_number",
                label: "Old Transporter Doc Number",
                visible: false
            },
            {
                name: "ewaybill_details_new_transporter_document_number",
                label: "New Transporter Doc Number",
                visible: false
            },
            {
                name: "ewaybill_details_taxable_amount",
                label: "Taxable Amount",
                visible: false
            },
            {
                name: "export_details_ship_bill_number",
                label: "Ship Bill Number",
                visible: false
            },
            {
                name: "export_details_ship_bill_date",
                label: "Ship Bill Date",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false,
                  
            },
            {
                name: "export_details_port_code",
                label: "Port Code",
                visible: false
            },
            {
                name: "export_details_refund_claim",
                label: "Refund Claim",
                visible: false
            },
            {
                name: "export_details_foreign_currency",
                label: "Foreign Currency",
                visible: false
            },
            {
                name: "export_details_country_code",
                label: "Country Code",
                visible: false
            },
            {
                name: "export_details_export_duty",
                label: "Export Duty",
                visible: false
            },
            {
                name: "get_invoice_details_AckNo",
                label: "Ack No",
                visible: false
            },
            {
                name: "get_invoice_details_AckDt",
                label: "Ack Date",
                visible: false,
                 type: "DatePicker",
                groupName: "Dates",
            },
            {
                name: "get_eway_bill_details_status",
                label: "E-Way Status",
                visible: false
            },
            {
                name: "get_eway_bill_details_ewbno",
                label: "E-Way Bill No",
                visible: false
            },
            {
                name: "get_eway_bill_details_ewbdt",
                label: "E-Way Bill Date",
                visible: false,
                 type: "DatePicker",
                groupName: "Dates",
            },
            {
                name: "get_eway_bill_details_ewbvalidtill",
                label: "E-Way Bill Valid Till",
                visible: false,
                 type: "DatePicker",
                groupName: "Dates",
            },
            {
                name: "get_eway_bill_details_errorMessage",
                label: "E-Way Error Message",
                visible: false
            },
            {
                name: "get_eway_bill_details_failed_status",
                label: "E-Way Failed Status",
                visible: false
            },
            {
                name: "get_eway_bill_details_code",
                label: "E-Way Code",
                visible: false
            },

            // Item List
            {
                name: "item_list_item_serial_number",
                label: "Item Serial No",
                visible: false
            },
            {
                name: "item_list_product_code",
                label: "Product Code",
                visible: false
            },
            {
                name: "item_list_product_description",
                label: "Product Description",
                visible: false
            },
            {
                name: "item_list_is_service",
                label: "Is Service",
                visible: false
            },
            {
                name: "item_list_hsn_code",
                label: "HSN Code",
                visible: false
            },
            {
                name: "item_list_bar_code",
                label: "Bar Code",
                visible: false
            },
            {
                name: "item_list_quantity",
                label: "Quantity",
                visible: false
            },
            {
                name: "item_list_free_quantity",
                label: "Free Quantity",
                visible: false
            },
            {
                name: "item_list_unit",
                label: "Unit",
                visible: false
            },
            {
                name: "item_list_unit_price",
                label: "Unit Price",
                visible: false
            },
            {
                name: "item_list_total_amount",
                label: "Total Amount",
                visible: false
            },
            {
                name: "item_list_discount",
                label: "Discount",
                visible: false
            },
            {
                name: "item_list_pre_tax_value",
                label: "Pre-Tax Value",
                visible: false
            },
            {
                name: "item_list_other_charge",
                label: "Other Charge",
                visible: false
            },
            {
                name: "item_list_assessable_value",
                label: "Assessable Value",
                visible: false
            },
            {
                name: "item_list_gst_rate",
                label: "GST Rate",
                visible: false
            },
            {
                name: "item_list_igst_amount",
                label: "IGST Amount",
                visible: false
            },
            {
                name: "item_list_cgst_amount",
                label: "CGST Amount",
                visible: false
            },
            {
                name: "item_list_sgst_amount",
                label: "SGST Amount",
                visible: false
            },
            {
                name: "item_list_cess_nonadvol_amount",
                label: "Cess Non-Advol Amount",
                visible: false
            },
            {
                name: "item_list_cess_cess_amount",
                label: "Cess Amount",
                visible: false
            },
            {
                name: "item_list_cess_state_cess_amount",
                label: "State Cess Amount",
                visible: false
            },
            {
                name: "item_list_cess_state_cess_nonadvol_amount",
                label: "State Cess Non-Advol Amount",
                visible: false
            },
            {
                name: "item_list_order_line_reference",
                label: "Order Line Reference",
                visible: false
            },
            {
                name: "item_list_country_origin",
                label: "Country of Origin",
                visible: false
            },
            {
                name: "item_list_product_serial_number",
                label: "Product Serial No",
                visible: false
            },
            {
                name: "item_list_attribute_details",
                label: "Attribute Details",
                visible: false
            },
            {
                name: "item_list_attribute_value",
                label: "Attribute Value",
                visible: false
            },
            {
                name: "item_list_total_item_value",
                label: "Total Item Value",
                visible: false
            },
            {
                name: "payment_details_bank_account_number",
                label: "Bank Account Number",
                visible: false
            },
            {
                name: "payment_details_paid_balance_amount",
                label: "Paid Balance Amount",
                visible: false
            },
            {
                name: "payment_details_credit_days",
                label: "Credit Days",
                visible: false
            },
            {
                name: "payment_details_direct_debit",
                label: "Direct Debit",
                visible: false
            },
            {
                name: "payment_details_credit_transfer",
                label: "Credit Transfer",
                visible: false
            },
            {
                name: "payment_details_branch",
                label: "Branch",
                visible: false
            },
            {
                name: "payment_details_payment_mode",
                label: "Payment Mode",
                visible: false
            },
            {
                name: "payment_details_payee_name",
                label: "Payee Name",
                visible: false
            },
            {
                name: "payment_details_payment_instruction",
                label: "Payment Instruction",
                visible: false
            },
            {
                name: "payment_details_outstanding_amount",
                label: "Outstanding Amount",
                visible: false
            },
            {
                name: "payment_details_payment_term",
                label: "Payment Term",
                visible: false
            },
            {
                name: "preceding_document_details_reference_of_original_invoice",
                label: "Reference of Original Invoice",
                visible: false
            },
            {
                name: "preceding_document_details_preceding_invoice_date",
                label: "Preceding Invoice Date",
                visible: false,
                 type: "DatePicker",
                groupName: "Dates",
            },
            {
                name: "preceding_document_details_other_reference",
                label: "Other Reference (Preceding)",
                visible: false
            },
            {
                name: "reference_details_other_reference",
                label: "Other Reference",
                visible: false
            },
            {
                name: "reference_details_invoice_period_start_date",
                label: "Invoice Period Start",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false
            },
            {
                name: "reference_details_invoice_period_end_date",
                label: "Invoice Period End",
                 type: "DatePicker",
                groupName: "Dates",
                visible: false
            },
            {
                name: "reference_details_invoice_reference_number",
                label: "Invoice Reference Number",
                visible: false
            },
            {
                name: "reference_details_invoice_remarks",
                label: "Invoice Remarks",
                visible: false
            },
            {
                name: "seller_details_gstin",
                label: "Seller GSTIN",
                visible: false
            },
            {
                name: "seller_details_trade_name",
                label: "Seller Trade Name",
                visible: false
            },
            {
                name: "seller_details_address1",
                label: "Seller Address 1",
                visible: false
            },
            {
                name: "seller_details_address2",
                label: "Seller Address 2",
                visible: false
            },
            {
                name: "seller_details_pincode",
                label: "Seller Pincode",
                visible: false
            },
            {
                name: "seller_details_state_code",
                label: "Seller State",
                visible: false
            },
            {
                name: "seller_details_phone_number",
                label: "Seller Phone Number",
                visible: false
            },
            {
                name: "seller_details_email",
                label: "Seller Email",
                visible: false
            },
            {
                name: "ship_details_gstin",
                label: "Ship GSTIN",
                visible: false
            },
            {
                name: "ship_details_legal_name",
                label: "Ship Legal Name",
                visible: false
            },
            {
                name: "ship_details_trade_name",
                label: "Ship Trade Name",
                visible: false
            },
            {
                name: "ship_details_address1",
                label: "Ship Address 1",
                visible: false
            },
            {
                name: "ship_details_address2",
                label: "Ship Address 2",
                visible: false
            },
            {
                name: "ship_details_location",
                label: "Ship Location",
                visible: false
            },
            {
                name: "ship_details_pincode",
                label: "Ship Pincode",
                visible: false
            },
            {
                name: "ship_details_state_code",
                label: "Ship State",
                visible: false
            },
            {
                name: "transaction_details_user_gstin",
                label: "User GSTIN",
                visible: false
            },
            {
                name: "transaction_details_supply_type",
                label: "Supply Type",
                visible: false
            },
            {
                name: "transaction_details_charge_type",
                label: "Charge Type",
                visible: false
            },
            {
                name: "transaction_details_ecommerce_gstin",
                label: "Ecommerce GSTIN",
                visible: false
            },
            {
                name: "transaction_details_igst_on_intra",
                label: "IGST on Intra",
                visible: false
            },
            {
                name: "value_details_total_assessable_value",
                label: "Total Assessable Value",
                visible: false
            },
            {
                name: "value_details_total_cgst_value",
                label: "Total CGST Value",
                visible: false
            },
            {
                name: "value_details_total_sgst_value",
                label: "Total SGST Value",
                visible: false
            },
            {
                name: "value_details_total_igst_value",
                label: "Total IGST Value",
                visible: false
            },
            {
                name: "value_details_total_cess_value",
                label: "Total CESS Value",
                visible: false
            },
            {
                name: "value_details_total_cess_value_of_state",
                label: "Total CESS State Value",
                visible: false
            },
            {
                name: "value_details_round_off_amount",
                label: "Round Off Amount",
                visible: false
            },
            {
                name: "value_details_total_invoice_value",
                label: "Total Invoice Value",
                visible: false
            },
            {
                name: "value_details_total_discount",
                label: "Total Discount",
                visible: false
            },
            {
                name: "value_details_total_other_charge",
                label: "Total Other Charge",
                visible: false
            },
            {
                name: "value_details_total_invoice_value_additional_currency",
                label: "Total Invoice Value (Additional Currency)",
                visible: false
            }












        ],

        onInit: function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Documents")
                .attachPatternMatched(this._onRouteMatched, this);

            this.getView().setModel(new JSONModel({ oModel: [], nDataLength: 0 }), "docs");
            this._createDynamicFilters();


        },

        _onRouteMatched: function () {
            this.getView().setBusy(true);
            const oFilterModel = this.getOwnerComponent().getModel("filterModel");
            if (!oFilterModel) {
                console.error("filterModel not found");
                return;
            }
            const oPayload = oFilterModel.getData();
            console.log("Payload received:", oPayload);
            this._callBackend(oPayload);
            this.getView().setBusy(false);
        },

        _callBackend: function (oPayload) {
            const sUrl = this.getView().getModel().sServiceUrl + "getCombinedReport";

            BusyIndicator.show(0);

            $.ajax({
                url: sUrl,
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(oPayload),

                success: function (oResponse) {
                    const oData = oResponse.value || oResponse.result || [];
                    this.getView().getModel("docs")
                        .setProperty("/oModel", oData);

                    console.log("Lenght of data : ", oData.length);
                    this.getView().getModel("docs")
                        .setProperty("/nDataLength", oData.length);

                }.bind(this),

                error: function (oError) {
                    console.error(oError);
                },

                complete: function () {
                    BusyIndicator.hide();
                }
            });
        },



        formatDate: function (sDate) {
            if (!sDate) return "";
            try {
                var iMillis = parseInt(sDate.replace(/\/Date\((\d+)\)\//, "$1"));
                var oDate = new Date(iMillis);
                var yyyy = oDate.getFullYear();
                var mm = String(oDate.getMonth() + 1).padStart(2, "0");
                var dd = String(oDate.getDate()).padStart(2, "0");
                return yyyy + "-" + mm + "-" + dd;
            } catch (e) {
                return sDate;
            }
        },



        onOpenPersonalization: function () {
            if (!this._oDialog) {
                const oTable = this.byId("lineItemsTable");
                this._aColumns = oTable.getColumns();

                const aItems = this._aColumns.map((oCol) => {
                    return new StandardListItem({
                        title: oCol.getLabel().getText(),
                        selected: oCol.getVisible()
                    });
                });

               

                this._oSelectAll = new CheckBox({
                    text: "Select All",
                    selected: aItems.every((oItem) => oItem.getSelected()),
                    select: (oEvent) => {
                        const bSelected = oEvent.getParameter("selected");
                        aItems.forEach((oItem) => oItem.setSelected(bSelected));
                        this._updateSelectedCount();
                    }
                });

                this._oList = new List({
                    mode: "MultiSelect",
                    items: aItems,
                    selectionChange: () => {
                        const bAllSelected = this._oList.getItems().every((oItem) => oItem.getSelected());
                        this._oSelectAll.setSelected(bAllSelected);
                        this._updateSelectedCount();
                    }
                });

                this._oSelectedCountText = new sap.m.Text({
                    text: "Selected Columns: " + aItems.filter(i => i.getSelected()).length
                });

                this._oDialog = new Dialog({
                    title: "Select Columns",
                    contentWidth: "520px",
                    content: new VBox({ items: [this._oSelectAll, this._oSelectedCountText, this._oList] }),
                    beginButton: new Button({
                        text: "OK",
                        press: this._onConfirmColumnSelection.bind(this)
                    }),
                    endButton: new Button({
                        text: "Cancel",
                        press: () => this._oDialog.close()
                    })
                });

                this.getView().addDependent(this._oDialog);
            }

            this._updateSelectedCount();
            this._oDialog.open();
        },




        

        _updateSelectedCount: function () {
            const iCount = this._oList.getItems().filter(i => i.getSelected()).length;
            this._oSelectedCountText.setText("Selected Columns: " + iCount);
        },


        _onConfirmColumnSelection: function () {
            const aSelectedTitles = this._oList.getSelectedItems().map((oItem) => oItem.getTitle());
            this._aColumns.forEach((oCol) => {
                oCol.setVisible(aSelectedTitles.includes(oCol.getLabel().getText()));
            });

            this._oDialog.close();
        },



        //////////////////filters//////////////

        // _syncFilterBarWithColumns: function () {
        //     var oTable = this.byId("lineItemsTable");
        //     var oFilterBar = this.byId("filterBar");

        //     if (!oTable || !oFilterBar) return;

        //     var aColumns = oTable.getColumns();
        //     var aFilterItems = oFilterBar.getFilterItems();

        //     var mExisting = {};
        //     aFilterItems.forEach(function (oItem) {
        //         mExisting[oItem.getName()] = oItem;
        //     });

        //     aColumns.forEach(function (oCol) {
        //         if (!oCol.getVisible()) return;

        //         var sPath = oCol.getSortProperty() || oCol.getFilterProperty();
        //         if (!sPath) return;

        //         if (!mExisting[sPath]) {
        //             var oInput = new Input({
        //                 liveChange: this._applyFilters.bind(this)
        //             });

        //             var oFilterItem = new FilterItem({
        //                 name: sPath,
        //                 label: oCol.getLabel().getText(),
        //                 control: oInput
        //             });

        //             oFilterBar.addFilterItem(oFilterItem);
        //         } else {
        //             delete mExisting[sPath];
        //         }
        //     }.bind(this));


        //     Object.keys(mExisting).forEach(function (sKey) {
        //         oFilterBar.removeFilterItem(mExisting[sKey]);
        //         mExisting[sKey].destroy();
        //     });
        // },
        // _applyFilters: function () {
        //     const oTable = this.byId("lineItemsTable");
        //     if (!oTable) return;

        //     const oBinding = oTable.getBinding("rows");
        //     if (!oBinding) return;

        //     const oFilterBar = this.byId("filterBar");
        //     const aFilters = [];

        //     if(!oFilterBar){
        //        this.getView().getModel("docs")
        //                 .setProperty("/nDataLength", oBinding.length);  
        //     }

        //     oFilterBar.getFilterItems().forEach(oItem => {
        //         const sPath = oItem.getName();
        //         const sValue = oItem.getControl().getValue();

        //         if (sValue) {
        //             aFilters.push(new Filter(
        //                 sPath,
        //                 FilterOperator.Contains,
        //                 sValue
        //             ));
        //         }
        //     });
        //         console.log("lengthafterfilter--->",aFilters.length);
        //           this.getView().getModel("docs")
        //                 .setProperty("/nDataLength", aFilters.length);
        //     oBinding.filter(aFilters);
        // },


        _applyFilters: function () {
    const oTable = this.byId("lineItemsTable");
    if (!oTable) return;

    const oBinding = oTable.getBinding("rows");
    if (!oBinding) return;

    const oFilterBar = this.byId("filterBar");
    const aFilters = [];

    if (!oFilterBar) {
        const aAllData = oBinding.getContexts();
        this.getView().getModel("docs").setProperty("/nDataLength", aAllData.length);
        return;
    }

    oFilterBar.getFilterItems().forEach(oItem => {
        const sPath = oItem.getName();
        const oControl = oItem.getControl();
        const sValue = oControl.getValue();

        if (sValue) {
            let oFilter;

            if (oControl instanceof sap.m.DatePicker) {
                // Convert YYYY-MM-DD to /Date(millis)/ format
                const oDate = new Date(sValue);
                const iMillis = oDate.getTime();
                const sFormatted = `/Date(${iMillis})/`;

                oFilter = new sap.ui.model.Filter(sPath, sap.ui.model.FilterOperator.EQ, sFormatted);
            } else {
                oFilter = new sap.ui.model.Filter(sPath, sap.ui.model.FilterOperator.Contains, sValue);
            }

            aFilters.push(oFilter);
        }
    });

    oBinding.filter(aFilters);

    const aFilteredData = oBinding.getContexts();
    this.getView().getModel("docs").setProperty("/nDataLength", aFilteredData.length);
    console.log("Filtered record count --->", aFilteredData.length);
}
,


        _createDynamicFilters: function () {
            const oFilterBar = this.byId("filterBar");
            if (!oFilterBar) return;

            this._filterConfig.forEach(cfg => {
                let oControl;


                if (cfg.type === "DatePicker") {
                    oControl = new sap.m.DatePicker({
                        valueFormat: "yyyy-MM-dd",
                        displayFormat: "yyyy-MM-dd",
                        change: this._applyFilters.bind(this)
                    });
                } else {
                    oControl = new sap.m.Input({
                        liveChange: this._applyFilters.bind(this)
                    });
                }

                const oFilterItem = new sap.ui.comp.filterbar.FilterItem({
                    name: cfg.name,
                    label: cfg.label,
                    visibleInFilterBar: cfg.visible,
                    control: oControl
                });

                oFilterBar.addFilterItem(oFilterItem);


            });
        }








    });
});
