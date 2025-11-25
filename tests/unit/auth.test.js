import { describe, it, expect, beforeEach } from 'vitest'
import { auth } from '../../src/store/auth'

describe('Auth Store', () => {
  beforeEach(() => {
    auth.logout()
  })

  it('should be initially logged out', () => {
    expect(auth.isLoggedIn).toBe(false)
    expect(auth.user).toBe(null)
  })

  it('should login user', () => {
    const user = { username: 'test', id: 1 }
    auth.login(user)
    expect(auth.isLoggedIn).toBe(true)
    expect(auth.user).toEqual(user)
  })

  it('should logout user', () => {
    const user = { username: 'test', id: 1 }
    auth.login(user)
    auth.logout()
    expect(auth.isLoggedIn).toBe(false)
    expect(auth.user).toBe(null)
  })
})
