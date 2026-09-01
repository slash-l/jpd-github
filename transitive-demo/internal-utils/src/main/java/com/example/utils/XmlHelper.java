package com.example.utils;

import com.thoughtworks.xstream.XStream;

public class XmlHelper {

    private final XStream xstream;

    public XmlHelper() {
        this.xstream = new XStream();
        XStream.setupDefaultSecurity(this.xstream);
        this.xstream.allowTypesByWildcard(new String[] {
                "java.util.ArrayList",
                "java.util.HashMap",
                "java.util.LinkedHashMap",
                "java.util.LinkedHashSet",
                "java.lang.Boolean",
                "java.lang.Byte",
                "java.lang.Double",
                "java.lang.Float",
                "java.lang.Integer",
                "java.lang.Long",
                "java.lang.Short",
                "java.lang.String",
                "java.math.BigDecimal",
                "java.math.BigInteger"
        });
    }

    public String toXml(Object obj) {
        return xstream.toXML(obj);
    }

    public Object fromXml(String xml) {
        return xstream.fromXML(xml);
    }
}
