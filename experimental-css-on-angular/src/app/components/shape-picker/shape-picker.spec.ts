import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ShapePicker } from "./shape-picker"

describe("ShapePicker", () => {
  let component: ShapePicker
  let fixture: ComponentFixture<ShapePicker>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapePicker],
    }).compileComponents()

    fixture = TestBed.createComponent(ShapePicker)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
