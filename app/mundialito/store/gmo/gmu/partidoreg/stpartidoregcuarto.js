/*
 * File: app/mundialito/store/gmo/gmu/partidoreg/stpartidoregcuarto.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('mundialito.store.gmo.gmu.partidoreg.stpartidoregcuarto', {
    extend: 'Ext.data.Store',

    alternateClassName: [
        'gmo.gmu.partidoreg.stpartidoregcuarto'
    ],
    requires: [
        'mundialito.model.gmo.gmu.partidoreg.mdpartidoreg',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'mundialito.model.gmo.gmu.partidoreg.mdpartidoreg',
            storeId: 'gmo.gmu.partidoreg.stpartidoregcuarto',
            groupField: 'ls_gru_denominacion',
            proxy: {
                type: 'ajax',
                url: '/library/Mundialito/process/lst_gmu_partidoreg.php',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        }, cfg)]);
    },

    getGroupString: function(instance) {
                return ':' + instance.get ( 'ls_gru_denominacion' );
    }

});