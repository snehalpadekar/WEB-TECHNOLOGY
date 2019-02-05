<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
		<body>
			<table >
			
			<tr>
			<th>rollno </th>
			<th>name </th>
			<th>div </th>
			</tr>
			<xsl:for-each select="student/comp">
			<tr>
			<td><xsl:value-of select="rollno"/></td>
			<td><xsl:value-of select="name"/></td>
			<td><xsl:value-of select="div"/></td>
			</tr>
			</xsl:for-each>
			</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>