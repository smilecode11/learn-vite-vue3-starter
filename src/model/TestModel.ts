import http from '@/utils/http'
import { test } from './apis/index'

class TestModel {
  /** 获取列表 */
  getList() {
    return http.get(test.getList)
  }
}

export default TestModel
