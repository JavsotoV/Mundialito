/*
 * File: app/mundialito/controller/gmo/gmu/jugador/ctrlistado.js
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

Ext.define('mundialito.controller.gmo.gmu.jugador.ctrlistado', {
    extend: 'Ext.app.Controller',

    alternateClassName: [
        'gmo.gmu.jugador.ctrlistado'
    ],

    refs: [
        {
            ref: 'Listado',
            selector: '#wingmujugadorlistado'
        },
        {
            ref: 'Mtto',
            selector: '#wingmuexcelenciareg'
        }
    ],

    onTxtcriterioSpecialkey: function(field, e, eOpts) {
                var me = this,
                    win = me.getMtto(),
                    btn = win.down('#btnRecuperar');

                    if(e.getKey()==e.ENTER){

                            me.onBtnRecuperarClick.call(me,me.btn);
                    }

    },

    onWingmujugadorlistadoAfterRender: function(component, eOpts) {
                    var me = this,
                        win = me.getListado(),
                        btn_retrieve = win.down('#btnRecuperar');

                        me.onBtnRecuperarClick(me,me.btn_retrieve);


    },

    onBtnRecuperarClick: function(button, e, eOpts) {
                        var me =this,
                        win = me.getListado(),
                        ln_trn_codigo = win.down('#ln_trn_codigo').getValue(),
                        ls_criterio = win.down('#txtcriterio').getValue(),
                        st_jugador = win.down('#grdgmujugador').getStore();

                        if (ls_criterio===undefined) {ls_criterio='';}

                        st_jugador.load(
                        {
                            params:{
                                'operacion':2,
                                'ln_trn_codigo':ln_trn_codigo,
                                'criterio':ls_criterio
                            }
                        });


    },

    onBtnSeleccionarClick: function(button, e, eOpts) {
                var me = this,
                    win = me.getListado(),
                    grd = win.down('#grdgmujugador'),
                    sm = grd.getSelectionModel();

                    if (sm.hasSelection()===false){

                         Ext.MessageBox.show({
                                title		:	'Mensaje',
                                msg			:	'Debe seleccionar un registro',
                                buttons 	:	Ext.MessageBox.OK,
                                icon		:	Ext.MessageBox.WARNING
                            });

                        return;
                    }

                    var registro = sm.getSelection()[0];

                        win.fireEvent('seleccionar',registro.get ( 'ln_jgd_codigo' ),registro.get ( 'ls_jgd_nombre' ));

                        win.close();
    },

    onBtnCerrarClick: function(button, e, eOpts) {
                button.up('window').close();
    },

    init: function(application) {
        this.control({
            "#wingmujugadorlistado #txtcriterio": {
                specialkey: this.onTxtcriterioSpecialkey
            },
            "#wingmujugadorlistado": {
                afterrender: this.onWingmujugadorlistadoAfterRender
            },
            "#wingmujugadorlistado #btnRecuperar": {
                click: this.onBtnRecuperarClick
            },
            "#wingmujugadorlistado #btnSeleccionar": {
                click: this.onBtnSeleccionarClick
            },
            "#wingmujugadorlistado #btnCerrar": {
                click: this.onBtnCerrarClick
            }
        });
    }

});
