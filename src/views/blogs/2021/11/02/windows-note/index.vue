<template>
    <div style="padding: 20px">
        <h1>一些笔记</h1>
        <h3>Windows 10 的一些不好记的操作</h3>
        <textarea style="width: 80%;height: 200px;border: 1px solid red">
修改 Windows 字符集 先开启全球化 utf8
若cmd 没有变过来  删除 计算机\HKEY_CURRENT_USER\Console\%SystemRoot%_system32_cmd.exe  下的 CodePage 项

关闭 Windows 10 保留空间
	DISM.exe /Online /Set-ReservedStorageState /State:Disabled

清理 Windows 更新
	DISM.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase

重置 Windows 通知区域图标
	1,注册表 : 计算机\HKEY_CLASSES_ROOT\Local Settings\Software\Microsoft\Windows\CurrentVersion\TrayNotify
	2,关闭 explorer 进程
	3,删除 IconStreams PastIconsStream 项
	4,启动 explorer 进程

多系统切换回 旧版 启动菜单
	bcdedit /set "{default}" bootmenupolicy legacy

多系统切换回 Metro版 启动菜单
	bcdedit /set "{default}" bootmenupolicy standard

使用 jdk 自带 keytool 生成自签名证书 (名字与姓氏可以为域名)
        keytool -genkeypair -keyalg RSA -alias my_keystore -keystore my_keystore.p12

</textarea>
        <h3>环境变量(自用)</h3>
        <textarea style="width: 80%;height: 300px;border: 1px solid #348900">
JAVA_HOME=C:\Apps\jdk

DOTNET_ROOT=C:\Apps\dotnet

JAVA_TOOL_OPTIONS=-Dfile.encoding=UTF-8 -Duser.language=zh

NODE_HOME=C:\Apps\node

NUGET_PACKAGES=C:\Apps\.apps\.nuget

Path=
	 %USERPROFILE%\AppData\Local\Microsoft\WindowsApps
	 %JAVA_HOME%\bin
	 %DOTNET_ROOT%
	 %NODE_HOME%
	 C:\Apps\idea\plugins\maven\lib\maven3\bin
	 C:\Apps\gnupg\bin
	 C:\Apps\git\cmd
	 C:\Apps\7z
</textarea>
    </div>

</template>
