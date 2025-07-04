del /A:H "%ProgramFiles(x86)%\APi1"
del /A:H "%AppData%\Avid\Sibelius\_manuscript\HEa3"
del /A:H "%ProgramData%\Avid\Sibelius\_manuscript\ACr2"
del /A:H "%ProgramData%\Avid\Sibelius\_manuscript\Plugins_v2"
REG ADD HKCU\Software\Avid\Sibelius\SibeliusTierSelection /v TrialDialogSavedChoice /t REG_DWORD /d 3 /f
