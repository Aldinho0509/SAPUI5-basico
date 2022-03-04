
sap.ui.define([
    "sap/ui/core/UIComponent",
    "aldogrupe2/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     *    @param {typeof sap.ui.core.UIComponent} UIComponent
     *    @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("aldogrupe2.SAPUI5.Component", {

            metadata: {
                manifest : "json"

            },

            init: function () {
                // call the init function of the paren
                UIComponent.prototype.init.apply(this, arguments);

                // set data model en la vista
                this.setModel(Models.CreateRecipient());
                // set i18n en la vista
                var i18nModel = new ResourceModel({
                    bundleName: "aldogrupe2.SAPUI5.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");

            }
        });

    });