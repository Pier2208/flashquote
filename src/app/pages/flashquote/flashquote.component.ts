import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashquoteService } from 'src/app/services/flashquote.service';

@Component({
  selector: 'app-flashquote',
  templateUrl: './flashquote.component.html',
  styleUrls: ['./flashquote.component.css']
})
export class FlashquoteComponent implements OnInit {
  marketId: string | null;
  flashFormDTO: any;

  constructor(private route: ActivatedRoute, private flashquoteService: FlashquoteService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.marketId = params.get("marketId")
      if (this.marketId) this.getFlashFormDTO(this.marketId)
    })
  }

  getFlashFormDTO(marketId: string) {
    this.flashquoteService.getFlashFormDTO(marketId).subscribe({
      next: flashDTO => {
        this.flashFormDTO = flashDTO
      },
      error: err => console.log('error', err)
    })
  }
}
