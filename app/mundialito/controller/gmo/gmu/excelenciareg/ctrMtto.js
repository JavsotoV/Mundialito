/*
 * File: app/mundialito/controller/gmo/gmu/excelenciareg/ctrMtto.js
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

Ext.define('mundialito.controller.gmo.gmu.excelenciareg.ctrMtto', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'gmo.gmu.excelenciareg.ctrMtto'
    ],

    views: [
        'gmo.gmu.excelenciareg.winMtto'
    ],

    refs: [
        {
            ref: 'Main',
            selector: '#vpngmumain'
        },
        {
            ref: 'Mtto',
            selector: '#wingmuexcelenciareg'
        }
    ],

    onBtnGuardarClick: function(button, e, eOpts) {
                var me = this,
                    vp = me.getMain(),
                    win = me.getMtto(),
                    st_exevp = vp.down('#grdgmuexcelenciareg'),
                    st_excelencia = win.down('#grdgmuexcelenciareg').getStore(),
                    ln_accion = win.down('#accion').getValue(),
                    frm = win.down('#frmgmuexcelenciareg'),
                    lstexrcodigo=[],
                    lstjgdcodigo=[];


                    if (frm.isValid()===false){

                        Ext.MessageBox.alert('Mensaje','Datos de formulario incompleto');

                        return;
                    }

                    Ext.each(st_excelencia.getRange(),function(record){
                        lstexrcodigo.push(record.get('ln_exr_codigo'));
                        lstjgdcodigo.push(record.get('ln_jgd_codigo'));

                    });


                frm.submit({
                    success: function(form, action){

                    var objJson =Ext.JSON.decode(action.response.responseText);
                    if (objJson.success){
                        Ext.MessageBox.alert('Mensaje',objJson.msg);
                        st_exevp.getStore().reload();
                        st_exevp.getSelectionModel().deselectAll();
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
                'lstexrcodigo[]':lstexrcodigo,
                'lstjgdcodigo[]':lstjgdcodigo
            }

        });


    },

    onBtnCerrarClick: function(button, e, eOpts) {
                    button.up('window').close();
    },

    onWingmuexcelenciaregAfterRender: function(component, eOpts) {
                var me = this,
                    win = me.getMtto(),
                    ln_reg_codigo = win.down('#ln_reg_codigo').getValue(),
                    ln_gru_codigo = win.down('#ln_gru_codigo').getValue(),
                    st_excelencia = win.down('#grdgmuexcelenciareg').getStore();

                    st_excelencia.load({
                        params:{
                            'operacion':2,
                            'ln_reg_codigo':ln_reg_codigo,
                            'ln_gru_codigo':ln_gru_codigo
                        }
                    });

    },

    init: function(application) {
        this.control({
            "#wingmuexcelenciareg #btnGuardar": {
                click: this.onBtnGuardarClick
            },
            "#wingmuexcelenciareg #btnCerrar": {
                click: this.onBtnCerrarClick
            },
            "#wingmuexcelenciareg": {
                afterrender: this.onWingmuexcelenciaregAfterRender
            }
        });
    }

});