sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        return Controller.extend("aldogrupe2.SAPUI5.controller.App", {

            onInit: function () {


            },

            onShow: function () {
                //read text i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                // read property data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMessage", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });
