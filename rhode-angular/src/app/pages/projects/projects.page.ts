import { Router } from '@angular/router'
import { AuthService } from './../../services/auth.service'
import { AlertController, NavController, LoadingController } from '@ionic/angular'
import { DataService } from './../../services/data.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})


export class ProjectsPage implements OnInit {
  user = this.authService.getCurrentUser()
  projects: { title: any; id: any; creator: any }[] = []

  constructor(
    private authService: AuthService,
    private data: DataService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navController: NavController,
    private router: Router
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.projects = await this.data.getProjects()
  }

  async createProject() {
    const alert = await this.alertController.create({
      header: 'Start Project',
      message: 'Enter a name for your project. Note that all projects are public in this app!',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'My cool group',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create project',
          handler: async (data) => {
            const loading = await this.loadingController.create()
            await loading.present()

            const newGroup = await this.data.createProject(data.title)
            if (newGroup) {
              this.projects = await this.data.getProjects()
              await loading.dismiss()

              this.router.navigateByUrl(`/groups/${newGroup.data['id']}`)
            }
          },
        },
      ],
    })

    await alert.present()
  }

  signOut() {
    this.authService.signOut()
  }

  openLogin() {
    this.navController.navigateBack('/')
  }
}