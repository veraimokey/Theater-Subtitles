# Theater-Subtitles

Local web app for playing subtitles during a play on stage. With no external dependencies required. Use common `.srt` subtitle format.

## Installation

* clone repository

  or

- download latest release or commit
- unzip archive

## Getting started

* run `./index.html` with browser
* click `Загрузить файлы субтитров` (_download subtitle files_) button
* select all necessary `.str` files at once
* click `Запустить спектакль` (_start performance_) button
* use main window as staff control page and subordinate window as a performance page
* press any keyboard key (while main window is focused) to start a beginning of the next aria (next one subtitle file)

## Interface

* `Загрузить файлы субтитров` (_download subtitle files_) button — (re)upload all `.srt` files
* `Запустить спектакль` (_start performance_) — open performance page with current subtitles list
* feedback indicator:
  |   |   |
  |:-:|:-:|
  | _ok_ | stable connection with performance page |
  | `no performance` | performance page is closed |
  | `no info` | unstable connection with performance page |


- press any key — start a beginning of the next aria (next one subtitle file)


---


# `.srt` formatting

It is a common [SubRip format](https://en.wikipedia.org/wiki/SubRip).

Subtitles blocks are numbered sequentially, starting at 1.
The timecode format used is hours:minutes:seconds,milliseconds with time units fixed to two zero-padded digits and fractions fixed to three zero-padded digits (00:00:00,000).
The comma (,) is used for fractional separator.

Subtitles block structure:
1. A numeric counter identifying each sequential subtitle
2. The time that the subtitle should appear on the screen, followed by --> and the time it should disappear
3. Subtitle text itself on one or more lines
4. A blank line containing no text, indicating the end of this subtitle

```
1
00:01:21,000 --> 00:01:32,000
Склонись, склонись,
Не смей смотреть в глаза.
Пригнись, пригнись,
Умрёшь здесь навсегда.

2
00:02:16,612 --> 00:02:19,376
Senator, we're making
our final approach into Coruscant.

3
00:02:19,482 --> 00:02:21,609
Very good, Lieutenant.

4
00:03:20,476 --> 00:03:22,671
There was no danger at all.
```
