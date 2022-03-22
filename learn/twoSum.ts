// https://mp.weixin.qq.com/s/3CMQaY1mO1Iqt4j30bUVcA

class TwoSumII {
  hashMap: { [index: number]: number } = {};

  // 向数据结构中添加一个数 number
  add(number: number) {
    // 记录number出现的次数
    if (this.hashMap[number] && this.hashMap[number] > 0) {
      this.hashMap[number] += 1;
    } else {
      this.hashMap[number] = 1;
    }
  }

  // 寻找当前数据结构中是否存在两个数的和为 value
  find(value: number) {
    for (const key in this.hashMap) {
      const keyNum = Number(key);
      const other: number = value - keyNum;
      // double key
      if (other === keyNum && this.hashMap[key] > 1) {
        return true;
      }
      // key && other
      if (other !== keyNum && this.hashMap[key] !== undefined) {
        return true;
      }
      return false;
    }
  }
}

class TwoSumIII {
  sum = new Set<number>();  // 记录所有可能组成的和
  nums: Array<number> = []; // 复刻原数组, sum每次从nums取值相加

  add(number: number) {
    for (let i = 0; i < this.nums.length; i++) {
      this.sum.add(i + number);
    }
    this.nums.push(number);
  }

  find(value: number) {
    return this.sum.has(value)
  }
}

function twoSum(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  return [];
}

export { TwoSumII, TwoSumIII, twoSum };
