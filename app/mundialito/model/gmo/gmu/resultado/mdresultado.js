/*
 * File: app/mundialito/model/gmo/gmu/resultado/mdresultado.js
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

Ext.define('mundialito.model.gmo.gmu.resultado.mdresultado', {
    extend: 'Ext.data.Model',

    alternateClassName: [
        'gmo.gmu.resultado.mdresultado'
    ],
    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'ln_nro_fila',

    fields: [
        {
            name: ' ln_nro_fila',
            type: 'int'
        },
        {
            name: 'ln_reg_numero',
            type: 'int'
        },
        {
            name: 'ln_cap_codigo',
            type: 'int'
        },
        {
            name: 'ls_cap_descripcion',
            type: 'string'
        },
        {
            name: 'ln_prd_codigo',
            type: 'int'
        },
        {
            name: 'ln_gru_codigo',
            type: 'int'
        },
        {
            name: 'ls_gru_denominacion',
            type: 'string'
        },
        {
            name: 'ls_equ_local_des',
            type: 'string'
        },
        {
            name: 'ls_equ_visitante_des',
            type: 'string'
        },
        {
            name: 'ln_equ_gollocal',
            type: 'string'
        },
        {
            name: 'ln_equ_golvisita',
            type: 'string'
        },
        {
            name: 'ln_equ_gollocalreg',
            type: 'string'
        },
        {
            name: 'ln_equ_golvisitareg',
            type: 'string'
        },
        {
            name: 'ln_puntaje',
            type: 'int'
        }
    ]
});