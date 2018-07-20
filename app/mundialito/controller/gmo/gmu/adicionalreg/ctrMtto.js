/*
 * File: app/mundialito/controller/gmo/gmu/adicionalreg/ctrMtto.js
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

Ext.define('mundialito.controller.gmo.gmu.adicionalreg.ctrMtto', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'gmo.gmu.adicionalreg.ctrMtto'
    ],

    views: [
        'gmo.gmu.adicionalreg.winMtto'
    ],

    refs: [
        {
            ref: 'Mtto',
            selector: '#wingmuadicionalreg'
        },
        {
            ref: 'Main',
            selector: '#vpngmumain'
        }
    ],

    onBtnGuardarClick: function(button, e, eOpts) {
        var me = this,
            vp = me.getMain(),
            win = me.getMtto(),
            frm = win.down('#frmgmuadicionalreg'),
            ln_accion = win.down('#accion').getValue(),
            st_adicionalreg = win.down('#grdgmuadicionalreg').getStore(),
            st_adivp 		= vp.down('#grdgmuadicionalreg'),
            lstadrcodigo=[],
            lstadrcantidad=[];

        if (frm.isValid()===false){

            Ext.MessageBox.alert('Datos de formulario incompleto');

            return;
        }

        Ext.each(st_adicionalreg.getRange(),function(record){
            lstadrcodigo.push(record.get('ln_adr_codigo'));
            lstadrcantidad.push(record.get('ln_adr_cantidad'));
        });

        frm.submit({
            success: function(form, action){

                var objJson =Ext.JSON.decode(action.response.responseText);
                if (objJson.success){
                    Ext.MessageBox.alert('Mensaje',objJson.msg);
                    st_adivp.getStore().reload();
                    st_adivp.getSelectionModel().deselectAll();
                    win.close();
                }
            },
            failure: function(form,action){

                var objJson =Ext.JSON.decode(action.response.responseText);

                Ext.MessageBox.alert('Mensaje',objJson.msgError);

            },
            params:{
                'operacion':1,
                'accion':ln_accion,
                'lstadrcodigo[]':lstadrcodigo,
                'lstadrcantidad[]':lstadrcantidad
            }

        });

    },

    onBtnCerrarClick: function(button, e, eOpts) {
                    button.up('window').close();
    },

    onWingmuadicionalregAfterRender: function(component, eOpts) {
                var me=this,
                    win = me.getMtto(),
                    st_adicionalreg = win.down('#grdgmuadicionalreg').getStore(),
                    ln_reg_codigo = win.down('#ln_reg_codigo').getValue(),
                    ln_gru_codigo = win.down('#ln_gru_codigo').getValue();

                    st_adicionalreg.load({
                        params:{
                            'operacion':2,
                            'ln_reg_codigo':ln_reg_codigo,
                            'ln_gru_codigo':ln_gru_codigo
                        }
                    });


    },

    init: function(application) {
        this.control({
            "#wingmuadicionalreg #btnGuardar": {
                click: this.onBtnGuardarClick
            },
            "#wingmuadicionalreg #btnCerrar": {
                click: this.onBtnCerrarClick
            },
            "#wingmuadicionalreg": {
                afterrender: this.onWingmuadicionalregAfterRender
            }
        });
    }

});