/*
 * File: app/mundialito/model/gmo/gmu/registro/mdregistro.js
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

Ext.define('mundialito.model.gmo.gmu.registro.mdregistro', {
    extend: 'Ext.data.Model',

    alternateClassName: [
        'gmo.gmu.registro.mdregistro'
    ],
    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'ln_reg_codigo',

    fields: [
        {
            name: 'ln_reg_codigo',
            type: 'int'
        },
        {
            name: 'ln_reg_numero',
            type: 'int'
        },
        {
            name: 'ld_reg_fecha',
            type: 'date'
        },
        {
            name: 'ls_per_nombre',
            type: 'string'
        },
        {
            name: 'ls_per_nrodocidentidad',
            type: 'string'
        },
        {
            name: 'ls_trn_denominacion',
            type: 'string'
        },
        {
            name: 'ld_trn_fechai',
            type: 'date'
        },
        {
            name: 'ld_trn_fechat',
            type: 'date'
        },
        {
            name: 'ln_reg_estado',
            type: 'int'
        },
        {
            name: 'ls_reg_estado',
            type: 'string'
        }
    ]
});