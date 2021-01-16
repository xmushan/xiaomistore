## vue父组件向子组件传值
> 所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

> 每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。

> **不可在一个子组件内部改变 prop**

1. 父组件
```
    <div>
        // v-bind 动态赋值
        <Children :paramA="value" /> 
        // 静态传值
        <Children paramA="value" /> 
    </div>
    <script>
        data() {
            return {
                value: '父组件的值'
            }
        }
    <script/>
```
2. 子组件
```
    <div>
        {{params}}
    </div>
    <script>
        props: {
            paramA: {
                type: String, // 指定参数类型
                default: 'default value' // 指定默认值
            }
        }
    </script>
```

## 字组件向父组件传值
1. 子组件
```
    <div>
        <input  type="button" value="字组件向父组件传值" @click="sendMsg"/>
    </div>
    <script>
        methods:{
            sendMsg() {
                // fatherFunc 父组件指定的传数据绑定的函数
                this.$emit('fatherFunc','子组件的值')
            }
        }
    <script/>
```
2. 父组件
```
    <div>
        <Children @fatherFunc="getChildrenMsg"/>
    </div>
    <script>
        method: {
            getChildrenMsg(data) {
                console.log(data) 
            }
        }
    </script>
```

### props验证规则

```
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 多个可能的类型
    propsC: {
        type: String,
        required: true
    },
    // 带有默认值的数字
    propsD: {
        type: String,
        default: 'default value'
    },
    // props传递数据的时候，默认值如果是数组或者对象，应该使用一个函数返回默认值
    propsE: {
        type: Object,
        default: () => {
            return {
                message: 'value'
            }
        }
    },
    propsE1: {
        type: Array,
        default: () => {
            return [{...},{...},{...}]
        }
    }
    // 自定义验证函数
    propsF: {
        validator: function(value) {
            return ['success','err','danger'].indexOf(value) !== -1
        }
    }
```

