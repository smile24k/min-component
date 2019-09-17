/*
 * @Author: WTL
 * @LastEditors: WTL
 * @Date: 2019-09-17 13:13:56
 * @LastEditTime: 2019-09-17 13:16:51
 * @Description: 
 */
module.exports = Behavior({
  // behaviors: ['wx://form-field'],
  properties: {
    defaultValue: {
      type: null,
      value: null,
    },
    name: {
      type: String,
      value: null,
    },
  },
  methods: {
    _resetAllValue() {
      const { value: _value, disable, readOnly, defaultValue = '' } = this.data;
      if (disable || readOnly) return false;
      const type = typeof _value;
      switch (type) {
        case 'string':
          this.setData({ value: defaultValue });
          break;
        case 'boolean':
          this.setData({ value: !!defaultValue });
          break;
        case 'object':
          this._emptyValue && this._emptyValue();
          break;
        default:
          break;
      }
    },
    validate(newValue) {
      const validate = this.getRelationNodes('../w-validate/index')[0];
      if (!validate) return false;
      validate.isValidate(newValue || '');
    },
  },
});
