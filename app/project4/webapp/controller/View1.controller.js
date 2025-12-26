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
        onInit: function () {
    const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    oRouter.getRoute("View1").attachPatternMatched(this._onRouteMatched, this); 
    
    const oFilterModel = new JSONModel({ oPayload: [] });
    this.getView().setModel(oFilterModel, "getCombinedReport");
},


_onRouteMatched: function () {
    
    this.byId("companyCodeInput").setValue("");
    this.byId("billingDocTypeInput").setValue("");
    this.byId("customerInput").setValue("");
    this.byId("deliveryNumberInput").setValue("");
    this.byId("plantInput").setValue("");
    this.byId("billingDocumentNoInput").setValue("");
    this.byId("businessPlaceInput").setValue("");
    this.byId("deliveryDocTypeInput").setValue("");

   
    this.byId("billingDateSingle").setValue("");
    this.byId("billingDateRange").setDateValue(null);
    this.byId("billingDateRange").setSecondDateValue(null);
    this.byId("deliveryDateSingle").setValue("");
    this.byId("deliveryDateRange").setDateValue(null);
    this.byId("deliveryDateRange").setSecondDateValue(null);
    this.byId("companyCodeInput").setValueState("None");
    this.byId("plantInput").setValueState("None");
    this.byId("billingDocumentNoInput").setValueState("None");
},


        


        onPressGo: function () {


            const sCompanyCode = this.byId("companyCodeInput").getValue();
            const sBillingDocType = this.byId("billingDocTypeInput").getValue();
            const sCustomerInput = this.byId("customerInput").getValue();
            const sDeliveryNumberInput = this.byId("deliveryNumberInput").getValue();
            const sPlantInput = this.byId("plantInput").getValue();
            const sBillingDocumentNoInput = this.byId("billingDocumentNoInput").getValue();
            const sBusinessPlaceInput = this.byId("businessPlaceInput").getValue();
            const sDeliveryDocTypeInput = this.byId("deliveryDocTypeInput").getValue();

            let bError = false; 


            if (!sCompanyCode) {
                this.byId("companyCodeInput").setValueState("Error");
                bError = true;
            } else {
                this.byId("companyCodeInput").setValueState("None");
            }


            if (!sPlantInput) {
                this.byId("plantInput").setValueState("Error");
                bError = true;
            } else {
                this.byId("plantInput").setValueState("None");
            }


            if (!sBillingDocumentNoInput) {
                this.byId("billingDocumentNoInput").setValueState("Error");
                bError = true;
            } else {
                this.byId("billingDocumentNoInput").setValueState("None");
            }


            


            if (bError) {
                MessageToast.show("Please fill all required fields!");
                return;
            }


            const fnToArray = function (sValue) {


                if (!sValue) {
                    return [];
                }
                return sValue
                    .split(",")
                    .map(v => v.trim())
                    .filter(v => v);
            };

           
            let sBillingDateFrom = "";
            let sBillingDateTo = "";

            const oBillingRange = this.byId("billingDateRange");
            if (oBillingRange && oBillingRange.getDateValue() && oBillingRange.getSecondDateValue()) {
                sBillingDateFrom = oBillingRange.getDateValue().toISOString().split("T")[0];
                sBillingDateTo = oBillingRange.getSecondDateValue().toISOString().split("T")[0];
            }

            
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

            
            this.getOwnerComponent().setModel(oFilterModel, "filterModel");

            sap.ui.core.UIComponent
                .getRouterFor(this)
                .navTo("Documents");
        }








    });
});