//
//  NotificationName.swift
//  IssueTracker
//
//  Created by 채훈기 on 2020/11/04.
//

import Foundation

extension Notification.Name {
    static let issueDidChanged = Notification.Name.init("issueDidChanged")
    static let labelDidToggled = Notification.Name.init("labelDidToggled")
    static let selectedLabelChanged = Notification.Name.init("selectedLabelChanged")
	static let labelDidCreated = Notification.Name.init("labelDidCreated")
	static let labelDidChanged = Notification.Name.init("labelDidChanged")
	static let labelDidDeleted = Notification.Name.init("labelDidDeleted")
	static let mileStoneDidCreated = Notification.Name.init("mileStoneDidCreated")
	static let mileStoneDidChanged = Notification.Name.init("mileStoneDidChanged")
	
	static let signInDidFinished = Notification.Name.init("signInDidFinished")
}
