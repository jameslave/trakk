import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AchievementsService } from 'src/app/services/achievements.service';
import Achievement from 'src/app/models/Achievement';
import { NavController } from '@ionic/angular';
import renderConfetti from '../../utils/render-confetti';

@Component({
  selector: 'app-achievement-popover',
  templateUrl: './achievement-popover.page.html',
  styleUrls: ['./achievement-popover.page.scss'],
})
export class AchievementPopoverPage implements AfterViewInit {
  private achievement: Achievement;

  constructor(
    private route: ActivatedRoute,
    private achievementsService: AchievementsService,
    private navCtrl: NavController,
  ) {
    const achievementId = this.route.snapshot.paramMap.get('achievementId');
    this.achievement = this.achievementsService.achievements[achievementId];
  }

  ngAfterViewInit() {
    renderConfetti();
  }

  get achievementName() {
    return this.achievement ? this.achievement.name : '';
  }

  get achievementDescription() {
    return this.achievement ? this.achievement.description : '';
  }

  closeAchievementPopover() {
    this.navCtrl.back();
  }
}
