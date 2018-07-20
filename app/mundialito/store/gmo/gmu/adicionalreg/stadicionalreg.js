/*
 * File: app/mundialito/store/gmo/gmu/adicionalreg/stadicionalreg.js
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

Ext.define('mundialito.store.gmo.gmu.adicionalreg.stadicionalreg', {
    extend: 'Ext.data.Store',

    alternateClassName: [
        'gmo.gmu.adicionalreg.stadicionalreg'
    ],
    requires: [
        'mundialito.model.gmo.gmu.adicionalreg.mdadicionalreg',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'mundialito.model.gmo.gmu.adicionalreg.mdadicionalreg',
            storeId: 'gmo.gmu.adicionalreg.stadicionalreg',
            groupField: 'ls_gru_denominacion',
            proxy: {
                type: 'ajax',
                url: '/library/Mundialito/process/lst_gmu_adicionalreg.php',
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