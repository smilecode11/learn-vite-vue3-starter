import http from '@/utils/http'
import { user } from '@/model/apis/index'

class UserModel {
  /** 获取用户信息 */
  getInfo(params: any) {
    return http({
      method: 'get',
      url: user.getInfo,
      data: params
    })
  }

  /** 获取用户权限 */
  getRole(params: any) {
    return http({
      method: 'post',
      url: user.getRole,
      data: params
    })
  }
}

export default UserModel
