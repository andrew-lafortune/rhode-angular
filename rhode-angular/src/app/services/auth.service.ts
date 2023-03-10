import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatform } from '@ionic/angular';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient
  private currentUser: BehaviorSubject<User | boolean> = new BehaviorSubject<User | boolean>(false)

  constructor(private router: Router) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

    this.supabase.auth.onAuthStateChange((event, sess) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        console.log('SET USER')
        this.currentUser.next(sess.user)
      } else {
        this.currentUser.next(false)
      }
    })

    this.loadUser()
   }

  async loadUser() {
    if (this.currentUser.value) {
      return
    }
    const user = await this.supabase.auth.getUser()

    if (user.data.user) {
      this.currentUser.next(user.data.user)
    } else {
      this.currentUser.next(false)
    }
  }

  signUp(credentials: { email: any; password: any }) {
    return this.supabase.auth.signUp(credentials)
  }

  signIn(credentials: { email: any; password: any }) {
    return this.supabase.auth.signInWithPassword(credentials)
  }

  sendPwReset(email: string) {
    return this.supabase.auth.resetPasswordForEmail(email)
  }

  async signOut() {
    await this.supabase.auth.signOut()
    this.router.navigateByUrl('/', {replaceUrl: true})
  }

  getCurrentUser(): Observable<User | boolean> {
    return this.currentUser.asObservable()
  }

  getCurrentUserId(): string | null {
    if (this.currentUser.value) {
      return (this.currentUser.value as User).id
    } else {
      return null
    }
  }

  signInWithEmail(email: string) {
    return this.supabase.auth.signInWithOtp({ email })
  }
}
