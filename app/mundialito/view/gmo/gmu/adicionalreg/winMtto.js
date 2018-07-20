/*
 * File: app/mundialito/view/gmo/gmu/adicionalreg/winMtto.js
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

Ext.define('mundialito.view.gmo.gmu.adicionalreg.winMtto', {
    extend: 'Ext.window.Window',

    alternateClassName: [
        'gmo.gmu.adicionalreg.winMtto'
    ],
    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Hidden'
    ],

    height: 277,
    itemId: 'wingmuadicionalreg',
    width: 729,
    layout: 'border',
    title: 'Pronostico de Goles y Tarjetas',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'label',
                            text: 'Menu de opciones:'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnGuardar',
                            iconCls: 'btnSave',
                            text: 'Guardar'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCerrar',
                            iconCls: 'btnClose',
                            text: 'Cerrar'
                        },
                        {
                            xtype: 'tbseparator'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    region: 'center',
                    itemId: 'frmgmuadicionalreg',
                    bodyPadding: 10,
                    method: 'POST',
                    url: '/library/Mundialito/process/lst_gmu_adicionalreg.php',
                    dockedItems: [
                        {
                            xtype: 'gridpanel',
                            dock: 'top',
                            itemId: 'grdgmuadicionalreg',
                            store: 'gmo.gmu.adicionalreg.stadicionalreggrupo',
                            columns: [
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'ln_adr_codigo',
                                    text: 'Ln Adr Codigo',
                                    format: '00'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'ln_reg_codigo',
                                    text: 'Ln Reg Codigo',
                                    format: '00'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'ln_gru_codigo',
                                    text: 'Ln Gru Codigo',
                                    format: '00'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'ls_gru_denominacion',
                                    text: 'Ls Gru Denominacion'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 615,
                                    dataIndex: 'ls_adc_descripcion',
                                    text: 'Descripcion'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    align: 'center',
                                    dataIndex: 'ln_adr_cantidad',
                                    text: 'Cantidad',
                                    format: '00',
                                    editor: {
                                        xtype: 'numberfield'
                                    }
                                }
                            ],
                            plugins: [
                                Ext.create('Ext.grid.plugin.CellEditing', {
                                    clicksToEdit: 1
                                })
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            itemId: 'ln_reg_codigo',
                            fieldLabel: 'Label',
                            name: 'ln_reg_codigo'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            itemId: 'ln_gru_codigo',
                            fieldLabel: 'Label',
                            name: 'ln_gru_codigo'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            itemId: 'accion',
                            fieldLabel: 'Label',
                            name: 'accion'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});