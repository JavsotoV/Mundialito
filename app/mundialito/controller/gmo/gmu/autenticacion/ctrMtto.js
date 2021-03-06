/*
 * File: app/mundialito/controller/gmo/gmu/autenticacion/ctrMtto.js
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

Ext.define('mundialito.controller.gmo.gmu.autenticacion.ctrMtto', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'gmo.gmu.autenticacion.ctrMtto'
    ],

    views: [
        'gmo.gmu.autenticacion.winMtto'
    ],

    refs: [
        {
            ref: 'Main',
            selector: '#wingmuautenticacion'
        }
    ],

    onBtnSesionClick: function(button, e, eOpts) {
                    var me = this,
                        win= me.getMain(),
                        frm = win.down('#frmgmuautenticacion');

                    if (frm.isValid()===false){

                        Ext.MessageBox.alert('Mensaje','Debe especificar cuenta y password de acceso');

                        return;

                    }


                frm.submit({
                    success: function(form, action){

                        var objJson =Ext.JSON.decode(action.response.responseText);

                        if (objJson.success){

                        if(objJson.data[0].ln_retorno!==1){

                            var ls_mensaje = objJson.data[0].ls_mensaje;

                            Ext.MessageBox.alert('Mensaje',ls_mensaje);
                        }
                            else
                        {

                            var vpn=Ext.create('mundialito.view.gmo.gmu.registro.vpmain');

                            vpn.down('#ln_per_codigo').setValue(objJson.data[0].ln_per_codigo);

                            vpn.down('#ls_per_nombre').setValue(objJson.data[0].ls_per_nombre);

                            //,{renderTo: Ext.getBody()}

                            win.setVisible(false);

                            vpn.show();


                        }

                      }
                    },
                    failure: function(form,action){

                            var objJson =Ext.JSON.decode(action.response.responseText);

                                Ext.MessageBox.alert('Mensaje',objJson.msgError);

                    },
                        params:{
                            'operacion':1
                        }

                    });



    },

    onBtnRegistrarClick: function(button, e, eOpts) {
                    var win =Ext.create('mundialito.view.gmo.gmu.persona.winMtto');

                        win.down('#accion').setValue(1);

                        win.down('#ln_per_codigo').setValue(0);

                        win.down('#win_parent').setValue(0);

                        win.show();

    },

    onBtnCerrarClick: function(button, e, eOpts) {

    },

    onLs_cta_passwordSpecialkey: function(field, e, eOpts) {
                var me = this,
                    win = me.getMain(),
                    btn_sesion = win.down('#btnSesion');

                    if(e.getKey()==e.ENTER){me.onBtnSesionClick(me,me.btn_sesion);}
    },

    init: function(application) {
        this.control({
            "#wingmuautenticacion #btnSesion": {
                click: this.onBtnSesionClick
            },
            "#wingmuautenticacion #btnRegistrar": {
                click: this.onBtnRegistrarClick
            },
            "#wingmuautenticacion #btnCerrar": {
                click: this.onBtnCerrarClick
            },
            "#wingmuautenticacion #ls_cta_password": {
                specialkey: this.onLs_cta_passwordSpecialkey
            }
        });
    }

});
