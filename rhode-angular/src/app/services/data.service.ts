/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { Subject } from 'rxjs'
import { environment } from 'src/environments/environment'

const PROJECT_TABLE = 'test_Project'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  getProjects() {
    return this.supabase
      .from(PROJECT_TABLE)
      .select(`title,id,creator`)
      .then((result) => result.data)
  }

  async createProject(title: string) {
    const newproject = {
      creator: (await this.supabase.auth.getUser()).data.user.id,
      title,
    }

    return this.supabase.from(PROJECT_TABLE).insert(newproject).select().single()
  }
}