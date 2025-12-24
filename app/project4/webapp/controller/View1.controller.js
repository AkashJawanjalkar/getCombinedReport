sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/comp/valuehelpdialog/ValueHelpDialog",
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/Label",
    "sap/m/Text",
    "sap/m/ColumnListItem",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, ValueHelpDialog, Table, Column, Label, Text, ColumnListItem, JSONModel) => {
    "use strict";

    return Controller.extend("project4.controller.View1", {
        onInit() {

            const oFilterModel = new JSONModel({ oPayload: [] });


            this.getView().setModel(oFilterModel, "getCombinedReport");

        },


        // onPressGo: function () {

        //     const sCompanyCode = this.byId("companyCodeInput").getValue();
        //     const sBillingDocType = this.byId("billingDocTypeInput").getValue();
        //     // const dBillingSingleDate=this.byId("billingDateSingle").getDate();
        //     //  const dBillingRangeDate=this.byId("billingDateRange").getDate();
        //     const sCustomerInput = this.byId("customerInput").getValue();
        //     const sDeliveryNumberInput = this.byId("deliveryNumberInput").getValue();
        //     const sPlantInput = this.byId("plantInput").getValue();
        //     const sBillingDocumentNoInput = this.byId("billingDocumentNoInput").getValue();
        //     const sBusinessPlaceInput = this.byId("businessPlaceInput").getValue();
        //     const sDeliveryDocTypeInput = this.byId("deliveryDocTypeInput").getValue();
        //     // const dDeliveryDateSingle=this.byId("deliveryDateSingle").getValue();
        //     //   const dDeliveryDateRange=this.byId("deliveryDateRange").getValue();

        //     const oPayload = {
        //         CompanyCode: sCompanyCode,
        //         Plant: sPlantInput,
        //         BillingDocType: sBillingDocType,
        //         BillingDocNo: sBillingDocumentNoInput,
        //         // BillingDateFrom:dBillingSingleDate,
        //         // BillingDateTo:dBillingRangeDate,
        //         Customer: sCustomerInput,
        //         BusinessPlace: sBusinessPlaceInput

        //     }

        //     console.log("Payload: ", oPayload);

        //     const oRouter = sap.ui.core.UIComponent.getRouterFor(this);

        //     oRouter.navTo("Documents", {
        //         payload: encodeURIComponent(JSON.stringify(oPayload))
        //     });



        // }



        onPressGo: function () {
            // helper: "a,b,c" → ["a","b","c"]

            const sCompanyCode = this.byId("companyCodeInput").getValue();
            const sBillingDocType = this.byId("billingDocTypeInput").getValue();
            const sCustomerInput = this.byId("customerInput").getValue();
            const sDeliveryNumberInput = this.byId("deliveryNumberInput").getValue();
            const sPlantInput = this.byId("plantInput").getValue();
            const sBillingDocumentNoInput = this.byId("billingDocumentNoInput").getValue();
            const sBusinessPlaceInput = this.byId("businessPlaceInput").getValue();
            const sDeliveryDocTypeInput = this.byId("deliveryDocTypeInput").getValue();
            
            const fnToArray = function (sValue) {


                if (!sValue) {
                    return [];
                }
                return sValue
                    .split(",")
                    .map(v => v.trim())
                    .filter(v => v);
            };

            // Billing Date (Range)
            let sBillingDateFrom = "";
            let sBillingDateTo = "";

            const oBillingRange = this.byId("billingDateRange");
            if (oBillingRange && oBillingRange.getDateValue() && oBillingRange.getSecondDateValue()) {
                sBillingDateFrom = oBillingRange.getDateValue().toISOString().split("T")[0];
                sBillingDateTo = oBillingRange.getSecondDateValue().toISOString().split("T")[0];
            }

            // FINAL PAYLOAD (as requested)
            const oPayload = {
                CompanyCode: fnToArray(sCompanyCode),
                Plant: fnToArray(sPlantInput),
                BillingDocType: fnToArray(sBillingDocType),
                BillingDocNo: fnToArray(sBillingDocumentNoInput),
                BillingDateFrom: sBillingDateFrom,
                BillingDateTo: sBillingDateTo,
                Customer: fnToArray(sCustomerInput),
                BusinessPlace: fnToArray(sBusinessPlaceInput)
            };

            console.log("Final Payload:", oPayload);


            const oFilterModel = new sap.ui.model.json.JSONModel(oPayload);

            // IMPORTANT: OwnerComponent pe set karo
            this.getOwnerComponent().setModel(oFilterModel, "filterModel");

            sap.ui.core.UIComponent
                .getRouterFor(this)
                .navTo("Documents");
        }








    });
});