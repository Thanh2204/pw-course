import { expect, Locator, Page } from "@playwright/test";
import { MaterialBasePage } from "./04-base-page";

export type Note = {
  title: string;
  content: string;
};

export class PersonalNotePage extends MaterialBasePage {
  readonly titleLocator: Locator;
  readonly contentLocator: Locator;
  readonly addNoteBtnLocator: Locator;
  readonly searchNoteLocator: Locator;
  readonly noteItemLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = page.getByRole("textbox", { name: "Title:" });
    this.contentLocator = page.getByRole("textbox", { name: "Content:" });
    this.addNoteBtnLocator = page.getByRole("button", { name: "Add Note" });
    this.searchNoteLocator = page.getByRole("textbox", { name: "Search Notes:" });
    this.noteItemLocator = page.locator("li");
  }

  async openPersonalNotePage() {
    await this.openMaterialPage();
    await this.personalNotePageLocator.click();
  }

  async addANote(title: string, content: string) {
    await this.titleLocator.fill(title);
    await this.contentLocator.fill(content);
    await this.addNoteBtnLocator.click();
  }

  async addMultiNote(notes: Note[]) {
    for (const note of notes) {
      await this.addANote(note.title, note.content);
    }
  }

  async searchNote(key: string) {
    await this.searchNoteLocator.fill(key);
  }

  async expectKeywordSearch() {
    const key = await this.searchNoteLocator.inputValue();
    const notes = this.noteItemLocator;
    const count = await notes.count();

    for (let i = 0; i < count; i++) {
      const noteText = await notes.nth(i).innerText();
      expect(noteText.toLowerCase()).toContain(key.toLowerCase());
    }
  }
}
