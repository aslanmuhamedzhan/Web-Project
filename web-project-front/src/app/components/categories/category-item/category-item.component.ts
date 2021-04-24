import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  categories:Category[]=[
    
  ];

  constructor(private categoryService:CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    // this.getCategories()
    this.categories = this.categoryService.getCategories();
  }

  onSelect(category: Category) {
    this.router.navigate(['categories', category.id]).then(()=>{
      window.location.reload();
    })
  }

  // getCategories(){
  //   this.categoryService.getCategories().subscribe((data=>{
  //     console.log(data);
  //   this.categories=data;
  //   }))
  // }
}
