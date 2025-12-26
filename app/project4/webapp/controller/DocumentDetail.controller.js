sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/BusyIndicator",
    "sap/ui/core/routing/History"
], function (Controller, JSONModel, BusyIndicator, History) {
    "use strict";

    return Controller.extend("project4.controller.DocumentDetail", {

        onInit: function () {
            
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("DocumentDetail")
                .attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            const sDocId = oEvent.getParameter("arguments").docId;
            this._loadDocumentDetails(sDocId);
        },



        _loadDocumentDetails: function (sDocId) {
            const sUrl = this.getView().getModel().sServiceUrl + "getCombinedReport";


            const oFilterModel = this.getOwnerComponent().getModel("filterModel");
            if (!oFilterModel) {
                console.error("filterModel not found");
                return;
            }

            const oPayload = oFilterModel.getData();


            oPayload.BillingDocNo = [sDocId];

            console.log("Fetching document with payload:", oPayload);

            BusyIndicator.show(0);

            $.ajax({
                url: sUrl,
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(oPayload),

                success: function (oResponse) {
                    if (oResponse.value && oResponse.value.length > 0) {
                        const doc = oResponse.value[0]; 
                        console.log("Document received:", doc);
                        console.log("Items in document:", doc.items); 

                        const oModel = new JSONModel({
                            header: doc,
                            items: doc.items || []
                        });

                        this.getView().setModel(oModel, "detail");
                    } else {
                        console.warn("No document found for ID:", sDocId);
                        this.getView().setModel(new JSONModel({ header: {}, items: [] }), "detail");
                    }
                }.bind(this),

                error: function (err) {
                    console.error("Detail fetch failed", err);
                },

                complete: function () {
                    BusyIndicator.hide();
                }
            });
        },




        onNavBack: function () {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                sap.ui.core.UIComponent
                    .getRouterFor(this)
                    .navTo("Documents", {}, true);
            }
        }
    });
});
