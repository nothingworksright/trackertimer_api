#!/usr/bin/env node

'use strict'

/**
 * Response related utilities.
 * @author {@link https://github.com/jmg1138 jmg1138}
 */

function error (res, message) {
  return new Promise(resolve => {
    res.status(200).json({'status': 'error', 'message': message})
    resolve()
  })
}
exports.error = error

function success (res, message, output) {
  return new Promise(resolve => {
    res.status(200).json({'status': 'success', 'message': message, 'output': output})
    resolve()
  })
}
exports.success = success
