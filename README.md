# Range slider

# 功能

range slider 组件可通过拖动的方式来设置一个给定范围内的数值。

# 如何使用

<range-slider> 支持如下的自定义属性：

* attributetypedescriptionminNumber
可拖动的最小值.maxNumber可拖动的最大值.

* valuesNumber

optional，包含最大值和最小值的数组. 如. values="[10, 20]". Defaults to [opts.min, opts.max].

* stepNumber

optional，增加减小的数值单位，默认为 1.

