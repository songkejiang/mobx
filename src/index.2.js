function log(target) {
    const desc = Object.getOwnPropertyDescriptors(target.prototype)
    console.log(desc)
    for (var key of Object.keys(desc)) {
        if (key === 'constructor') {
            continue
        }
        const func = desc[key].value
        if ('function' === typeof func) {
            Object.defineProperty(target.prototype, key, {
                value(...args) {
                   console.log('before' + key)
                   let ret = func.apply(this, args)
                   console.log('after' + key)
                   return  ret
                }
            })
        }
    }
}

function readonly(target, key, descriptor) {
    console.log(target)
    console.log(key)
    console.log(descriptor)
    descriptor.writable = false
}

function validate(target, key, descriptor) {
    console.log(target)
    return function(target, key, descriptor) {
        const func = descriptor.value
        descriptor.value = function(...args) {
            for(let num of args) {
                if('number' !== typeof num ) {
                    throw new Error(`${num} is not a number`)
                }
            }
            return func.apply(this, args)
        }
    }
}

@log
class Numberic{
    @readonly 
    PI = 3.1415
    @validate('aa')
    add (...nums) {
        return nums.reduce((p, n) => (p + n), 0)
    }
}
var num = new Numberic()

num.add(2)